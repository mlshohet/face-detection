import React from 'react';
import ProfileIcon from '../profile/profile-icon';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
			return (
				<nav className='nav pt4 bg-black f6 link black pb2'>
					<ProfileIcon onRouteChange={onRouteChange}/>
				</nav>
			);
		} else {
			return (
				<nav className='nav pt4 pb4 bg-black f6 link black'>
					<div onClick={() => onRouteChange('signout')} className='white pointer dim pr3'>SIGN IN</div>
					<div onClick={() => onRouteChange('register')} className='white pointer dim pr3'>REGISTER</div>
				</nav>
			);
		}
}

export default Navigation;