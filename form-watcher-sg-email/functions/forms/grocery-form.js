const sgMail = require("@sendgrid/mail");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");

const sendGridApiKey = defineSecret("SG_API_KEY");

function getChicagoTimestamp() {
  const now = new Date();
  const chicagoOffset = -5 * 60;
  const localOffset = now.getTimezoneOffset();
  const chicagoTime = new Date(
    now.getTime() + (chicagoOffset - localOffset) * 60 * 1000
  );

  const year = chicagoTime.getFullYear();
  const month = String(chicagoTime.getMonth() + 1).padStart(2, "0");
  const day = String(chicagoTime.getDate()).padStart(2, "0");
  const hours = String(chicagoTime.getHours()).padStart(2, "0");
  const minutes = String(chicagoTime.getMinutes()).padStart(2, "0");
  const seconds = String(chicagoTime.getSeconds()).padStart(2, "0");

  return `${month}/${day}/${year} @ ${hours}:${minutes}:${seconds}`;
}

const sendGroceryFormEmail = onDocumentCreated(
  {
    document: "groceryForm/{docId}",
    secrets: [sendGridApiKey],
  },
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
      console.log("No data associated with the event");
      return;
    }

    const apiKey = sendGridApiKey.value() || process.env.LOCAL_SG_API_KEY;
    if (!apiKey) {
      console.error("Skipping email send because SG_API_KEY is missing.");
      return;
    }

    sgMail.setApiKey(apiKey);

    const newForm = snapshot.data();
    const timestamp = getChicagoTimestamp();

    const name = newForm.name || "N/A";
    const email = newForm.email || "N/A";
    const phoneNumber = newForm.phoneNumber || "N/A";
    const approximateVisitDate = newForm.approximateVisitDate || "N/A";
    const purchaseOutcome = newForm.purchaseOutcome || "N/A";
    const hasReceipt = newForm.hasReceipt || "N/A";
    const experience = newForm.experience || "N/A";
    const source = newForm.source || "grocery-landing-page";

    const prospectDetailBlock =
      `NAME: ${name}\n` +
      `EMAIL: ${email}\n` +
      `PHONE: ${phoneNumber}\n` +
      `APPROXIMATE DATE OF PURCHASE OR STORE VISIT: ${approximateVisitDate}\n` +
      `PURCHASE RESULT: ${purchaseOutcome}\n` +
      `HAS RECEIPT: ${hasReceipt}\n` +
      `EXPERIENCE: ${experience}\n`;

    const internalDetailBlock =
      `${prospectDetailBlock}` +
      `SOURCE: ${source}\n`;

    const prospectConfirmation = {
      to: email,
      from: "brian@burnslawpc.com",
      subject: "We received your grocery pricing report - Burns Law P.C.",
      text:
        "Hello,\n\n" +
        "Thank you for contacting Burns Law P.C. We received your grocery pricing report and will review it promptly.\n\n" +
        "Below is a copy of your submission:\n\n" +
        `${prospectDetailBlock}\n` +
        "If this is an emergency, dial 911 immediately.\n\n" +
        "Sincerely,\nBrian Burns, Esq.\n\n" +
        "This is an automated message. I am not your attorney unless we have a signed retainer agreement.",
    };

    const internalProspectAlert = {
      to: "brian@burnslawpc.com",
      from: "brian@burnslawpc.com",
      subject: `NEW GROCERY PROSPECT - ${email} [${timestamp}]`,
      text:
        "A new grocery form was submitted.\n\n" +
        `${internalDetailBlock}\n` +
        `TIMESTAMP: ${timestamp}\n`,
    };

    try {
      const emailJobs = [sgMail.send(internalProspectAlert)];

      if (email && email !== "N/A") {
        emailJobs.push(sgMail.send(prospectConfirmation));
      }

      await Promise.all(emailJobs);
      console.log("Grocery form emails sent successfully");
    } catch (error) {
      console.error("Error sending grocery form emails:", error);
    }
  }
);

module.exports = { sendGroceryFormEmail };