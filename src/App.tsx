import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Header } from './components/Header/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
    <Header />
    <Footer />
    </div>
  );
}

export default App;
