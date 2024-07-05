"use client"
import { AppCheckProvider, useFirebaseApp } from 'reactfire';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
// import configuration from '~/configuration';
import firebaseConfig from 'firebaseConfig';
 
function FirebaseAppCheckProvider({ children }) {
    // const siteKey = process.env.NEXT_PUBLIC_APPCHECK_KEY;
    const siteKey = "6Ld-2ggqAAAAAKGaPa6XCbHRliXRjtwpj6ghYnD-";

    const app = useFirebaseApp();

    if (!siteKey || !isBrowser() || firebaseConfig.emulator) {
        return <>{children}</>;
    }

    if (!firebaseConfig.production) {
        attachAppCheckDebugToken();
    }

    const provider = new ReCaptchaV3Provider(siteKey);

    const sdk = initializeAppCheck(app, {
        provider,
        isTokenAutoRefreshEnabled: true,
    });

    return <AppCheckProvider sdk={sdk}>{children}</AppCheckProvider>;
}
 
export default FirebaseAppCheckProvider;