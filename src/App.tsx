import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

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
