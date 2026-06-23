# Function Deploy Guide

## Quick Deploy Steps for PowerShell

Run these commands from the workspace root after `cd form-watcher-sg-email`.

1. Install dependencies for the functions code:
```bash
cd functions
npm install
cd ..
```

2. Set or rotate the SendGrid secret:
```bash
firebase functions:secrets:set SG_API_KEY
```

3. Deploy both backend functions using the PowerShell-safe command:
```bash
firebase deploy --only "functions:sendWelcomeEmail,functions:sendGroceryFormEmail"
```

4. Verify that both functions are deployed:
```bash
firebase functions:list
```

## Why the old command fails

This command is unreliable in PowerShell for this project:
```bash
firebase deploy --only functions:sendWelcomeEmail,functions:sendGroceryFormEmail
```

In this workspace, Firebase CLI accepts the combined filter when the entire `--only` value is wrapped in quotes, but the unquoted comma-separated version returns:
```text
Error: No function matches given --only filters. Aborting deployment.
```

Use the quoted version whenever you want to deploy both functions together.

## Safe fallback

If the targeted deploy ever behaves strangely again, deploy the whole functions codebase instead:
```bash
firebase deploy --only functions
```

Firebase will create new functions automatically from your exports. You do not need to create them manually in the Firebase website UI.

## Function names in this project

- `sendWelcomeEmail`: handles submissions from `form/{docId}`
- `sendGroceryFormEmail`: handles submissions from `groceryForm/{docId}`

## Deploy one function only

These single-function deploy commands were verified to work:
```bash
firebase deploy --only functions:sendWelcomeEmail
firebase deploy --only functions:sendGroceryFormEmail
```

## Local fallback option (.env)

Create `form-watcher-sg-email/functions/.env`:

```env
LOCAL_SG_API_KEY=SG.your_real_sendgrid_key_here
```

Use `LOCAL_SG_API_KEY` for local testing only. Production should use the `SG_API_KEY` secret.

