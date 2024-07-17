import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './index.css';
import './i18next.js'; // Import the i18n configuration
import { AuthProvider } from './Authcontext'; // Ensure this is the correct path to Authcontext

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

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
