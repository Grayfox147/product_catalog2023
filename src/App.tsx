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
                        path="/"
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
                            <div>error webpage not found</div>
                        }
                    />
                </Routes>
            </main>
        </div>
    );
};

export default App;
