import './App.css';
import { Header } from './components/Header';
import { Feet } from './components/Feet';
import { Routes } from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes />
				<Feet />
			</div>{' '}
		</BrowserRouter>
	);
}

export default App;