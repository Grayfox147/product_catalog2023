import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ItemCardPage } from './pages/ItemCardPage';

const App: React.FC = () => {
    const [phoneID, setPhoneId] = useState(0);

    return (
        <div className="App">
            <main className='section'>
                <Routes>
                    <Route
                        path="/product_catalog2023"
                        element={
                            <HomePage />
                        }
                    />
                    <Route
                        path="/phones"
                        element={
                            <CatalogPage setPhoneId={setPhoneId} />
                        }
                    />
                    <Route
                        path="/ItemCardPage"
                        element={
                            <ItemCardPage phoneId={phoneID} />
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <h1 className="title">Page not found</h1>
                        }
                    />
                </Routes>
            </main>
        </div>
    );
};

export default App;
