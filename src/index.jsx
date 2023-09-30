import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

// import { HelmetProvider } from 'react-helmet';


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceWorker.js")
        .catch(function(error) {
            console.error("Échec de l'enregistrement du Service Worker:", error);
        });
}


const splashScreen = document.getElementById("loading-start");
splashScreen?.classList.add("fade-out");
setTimeout(() => splashScreen?.remove(), 500);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <HelmetProvider> */}
            <App />
        {/* </HelmetProvider> */}
    </StrictMode>
);

// reportWebVitals(console.log);