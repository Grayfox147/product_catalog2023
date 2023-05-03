import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import { createStore } from 'react-redux';
// import { Phone } from './pages/HomePage';

const Root = () => (
    <Router>
        <App />
    </Router>
);

//  STORE => Globalized STATE
// ACTION => Increment
// const addPhone = () => {
//     return {
//         type: 'ADD'
//     };
// };

// const removePhone = () => {
//     return {
//         type: 'DELETE'
//     };
// };
//  REDUCER
// const setFavMovies = (state:Phone[] = []) => {
//     return {
//       switch(action.type) {
//         case 'ADD' :
//           return state.push()
//       }
//     };
// };
// DISPATCH => implement the action

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Root />);

