import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Header } from './components/Header/Header';
import Footer from './components/Footer';
import Iphone14 from './img/Iphone14Pro_Home-Sm.jpg'

const App: React.FC = () => {
  return (
    <div className="App">
    <Header />
    <body className='main'>
     <h1 className='main_title'>Welcome to Nice Gadgets store!</h1>
     <img src={Iphone14} alt="Iphone14ProBeyond" />
    </body>
    <Footer />
    </div>
  );
}

export default App;
