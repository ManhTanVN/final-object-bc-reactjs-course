import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/source-sans-pro'; // Defaults to weight 400.
import './index.css';
import App from './App';

import ContextProvider from './components/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
);
