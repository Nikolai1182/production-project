import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';

import App from './app/App';
import './app/styles/index.scss';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <BrowserRouter>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);
