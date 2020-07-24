import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
			return (
				<nav className='nav bg-black f6 link black pa2 pl5'>
					<p onClick={() => onRouteChange('signout')} className='white pointer dim'>SIGN OUT</p>
				</nav>
			);
		} else {
			return (
				<nav className='nav bg-black f6 link black pa2 pl5'>
					<p onClick={() => onRouteChange('signout')} className='white pointer dim pr3'>SIGN IN</p>
					<p onClick={() => onRouteChange('register')} className='white pointer dim pr3'>REGISTER</p>
				</nav>
			);
		}
}

export default Navigation;