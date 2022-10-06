import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root')! as HTMLElement
    );
root.render(
    <React.StrictMode>
        <link rel="stylesheet" href="../public/styles/left-column.css" />
        <App />
    </React.StrictMode>
);