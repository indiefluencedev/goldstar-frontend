import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './index.css';
import './i18next.js'; // Import the i18n configuration
import { AuthProvider } from './Authcontext'; // Ensure this is the correct path to Authcontext

const domain = "dev-8k7yecnspaxggx3w.us.auth0.com";
const clientId = "Tk4nWuTKTAsZPFOPnixO9dliZdvlPbI9";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>
);
