import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/index.scss';

const App = () => {
    return (
        <div className="app-lavka-container">

        </div>
    )
}

export const initAppLavka = () => {
    const wrap = document.getElementById('app-lavka');
    if (!wrap) return;

    const root = createRoot(wrap);
    root.render(<App />);
}