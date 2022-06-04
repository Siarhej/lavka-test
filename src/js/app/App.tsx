import React from 'react';
import { render } from 'react-dom';
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

    render(
        <App />,
        wrap
    )
}