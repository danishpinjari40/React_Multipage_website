import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import About from './Routes/About';
import Contacts from './Routes/Contact';
import Service from './Routes/Service';
import Error from './Routes/Error';

const App = () => {
	return (
		<>
			<Routes>
				{/* exact is use for home page only  */}
				<Route exact path="/" Component={Home}></Route>
				<Route path="/about" Component={About}></Route>
				<Route path="/contact" Component={Contacts}></Route>
				<Route path="/service" Component={Service}></Route>
				<Route path="*" Component={Error}></Route>
			</Routes>
		</>
	);
};

export default App;
