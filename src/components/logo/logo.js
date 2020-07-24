import React from 'react';
import logo from './logo.png';
import './logo.css';

const Logo = () => {
		return(
			<div>
				<img className='logo' alt='logo' src={logo}/>	
			</div>
		);
}

export default Logo;