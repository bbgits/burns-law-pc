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

const sendMainFormEmail = onDocumentCreated(
  {
    document: "form/{docId}",
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
    const name = newForm.firstName;
    const email = newForm.email;
    const phoneNumber = newForm.phoneNumber || "N/A";
    const message = newForm.message;
    const source = newForm.source || "website";
    const timestamp = getChicagoTimestamp();

    const detailBlock =
      `NAME: ${name || "N/A"}\n` +
      `EMAIL: ${email || "N/A"}\n` +
      `PHONE: ${phoneNumber}\n` +
      `MESSAGE: ${message || "N/A"}\n`;

    const prospectConfirmation = {
      to: email,
      from: "brian@burnslawpc.com",
      subject: "We received your message - Burns Law P.C.",
      text:
        "Hello,\n\n" +
        "Thank you for contacting Burns Law P.C. We received your message and will review your claim and follow up as soon as possible.\n\n" +
        "Below is a copy of your submission:\n\n" +
        `${detailBlock}\n` +
        "If this is an emergency, dial 911 immediately.\n\n" +
        "Regards,\nBrian Burns\nBurns Law P.C.\n\n" +
        "This is an automated message. I am not your attorney unless we have a signed retainer agreement. Please do not send any confidential information until we have established an attorney-client relationship.",
    };

    const internalProspectAlert = {
      to: "brian@burnslawpc.com",
      from: "brian@burnslawpc.com",
      subject: `NEW PROSPECT - ${email} [${timestamp}]`,
      text:
        "A new prospect form was submitted.\n\n" +
        `SOURCE: ${source}\n` +
        `${detailBlock}`,
    };

    try {
      const emailJobs = [sgMail.send(internalProspectAlert)];

      if (email) {
        emailJobs.push(sgMail.send(prospectConfirmation));
      }

      await Promise.all(emailJobs);
      console.log("Main form prospect emails sent successfully");
    } catch (error) {
      console.error("Error sending main form emails:", error);
    }
  }
);

module.exports = { sendMainFormEmail };