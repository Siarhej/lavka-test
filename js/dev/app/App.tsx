import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Product from './layouts/Product/Product';
import Reviews from './layouts/Reviews/Reviews';
import './scss/index.scss';


const App = () => {
    return (
        <div className="app-lavka-container">
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
            <Footer />
        </div>
    )
}

export const initAppLavka = () => {
    const wrap = document.getElementById('app-lavka');
    if (!wrap) return;

    const root = createRoot(wrap);
    root.render(
        <BrowserRouter basename="/html/lavka.html">
            <App />
        </BrowserRouter>
    );
}
