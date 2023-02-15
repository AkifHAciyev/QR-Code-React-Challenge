import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';

function App() {
	const [value, setValue] = useState('');
	const [qr, setQr] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		setQr(value);
		setValue('');
	};
	return (
		<div className="App">
			<h2>QR generator</h2>
			<form onSubmit={handleSubmit}>
				<input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="write something" />
				<button>generate QR</button>
			</form>
			<QRCodeSVG value={qr} />
		</div>
	);
}

export default App;
