import React from 'react';
import logo from './logo.jpg';
import './logo.css';

const Logo = () => {
		return(
			<div>
				<img className='logo' alt='logo' src={logo}/>	
			</div>
		);
}

export default Logo;