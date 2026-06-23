const admin = require("firebase-admin");
const dotenv = require("dotenv");
const { sendMainFormEmail } = require("./forms/main-form");
const { sendGroceryFormEmail } = require("./forms/grocery-form");

// Initialize Firebase Admin
admin.initializeApp();

// Load environment variables
dotenv.config();

// Keep the existing exported name so current deploy command still works.
exports.sendWelcomeEmail = sendMainFormEmail;
exports.sendGroceryFormEmail = sendGroceryFormEmail;
