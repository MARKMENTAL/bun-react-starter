import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import BunComponent from './BunComponent.jsx';
import SystemInfoComponent from './SystemInfoComponent.jsx';
import HistoryComponent from './HistoryComponent.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BunComponent />
    <HistoryComponent />
    <SystemInfoComponent />
  </React.StrictMode>
);
