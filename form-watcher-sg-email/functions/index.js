const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");

// Initialize Firebase Admin
admin.initializeApp();

// Load environment variables
dotenv.config();
const apiKey = process.env.SG_API_KEY;
console.log("API KEY LOADED: " + apiKey);

// Initialize SendGrid
sgMail.setApiKey(apiKey);

// Helper function to get the current timestamp in Chicago time
function getChicagoTimestamp() {
  const now = new Date();

  // Convert to Chicago time (Central Time)
  const chicagoOffset = -5 * 60; // Central Time is UTC-5
  const localOffset = now.getTimezoneOffset(); // Local timezone offset in minutes
  const chicagoTime = new Date(now.getTime() + (chicagoOffset - localOffset) * 60 * 1000);

  // Format the timestamp as MM/DD/YYYY @ HH:MM:SS
  const year = chicagoTime.getFullYear();
  const month = String(chicagoTime.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(chicagoTime.getDate()).padStart(2, "0");
  const hours = String(chicagoTime.getHours()).padStart(2, "0");
  const minutes = String(chicagoTime.getMinutes()).padStart(2, "0");
  const seconds = String(chicagoTime.getSeconds()).padStart(2, "0");

  return `${month}/${day}/${year} @ ${hours}:${minutes}:${seconds}`;
}

// Cloud Function to send email on new document creation in the "form" collection
exports.sendWelcomeEmail = onDocumentCreated("form/{docId}", async (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }

  const newForm = snapshot.data();
  const name = newForm.firstName;
  const email = newForm.email; // Assuming the document has an email field
  const message = newForm.message;

  // Get the current timestamp in Chicago time
  const timestamp = getChicagoTimestamp();

  // Compose the email message
  const msg1 = {
    to: "brian@burnslawpc.com", // Email address to send to
    from: "welcome@turbotabs.com", // Change to your verified sender
    subject: `* * BURNS LAW - NEW CLIENT LEAD * * [${timestamp}]`, // Add timestamp to subject
    text: `POTENTIAL CLIENT: \n   NAME: \t${name} \n   EMAIL: \t${email} \n   MSG.: \t${message}`,
  };

  // Send the email
  try {
    await sgMail.send(msg1);
    console.log("Email sent to BURNS LAW PC admin");
  } catch (error) {
    console.error("Error sending email:", error);
  }
});
