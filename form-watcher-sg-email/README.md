# Function to Send Welcome Email
Deploy:
1. `cd tt_func_sg_welcome_email/functions`
2. `firebase deploy --only functions:sg-welcome`

## VIP Notes...
- Maximum size (message body, headers, and attachments) is 30 MB
- Recommended Max Attachment Size = 10 MB

## Origin Story (how I made this)
1. Make directory `tt_func_sg_welcome`
2. Navigate to directory `cd tt_func_sg_welcome`
3. Initialize Firebase `firebase init functions`
4. (follow prompts to complete functions setup)
5. Navigate to functions directory `cd functions`
6. Install sendgrid `npm install @sendgrid/mail --save`
7. Install dotenv `npm install dotenv`
8. SendGrid Website: Create Acccount, Authorize Domain, Get Web API Key
9. Create a .env file and save the API key to that file `SG_API_KEY=your_api_key_here`
10. Create function in index.js
11. Deploy with `firebase deploy --only functions`
