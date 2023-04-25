import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';

const App: React.FC = () => {
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
                            <CatalogPage />
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
