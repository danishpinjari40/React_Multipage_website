import React from 'react';
import Navbar from '../component/navbar';
import Error404 from '../component/Error404';
import Footer from '../component/Footer';

const Error = () => {
	return (
		<>
			<Navbar />
			<div>
				<Error404 />
				<Footer />
			</div>
		</>
	);
};

export default Error;
