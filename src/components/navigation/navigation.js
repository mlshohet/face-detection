import React from 'react';
import ProfileIcon from '../profile/profile-icon';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
			return (
				<div className='pt4 bg-black f6 link black pb2'>
					<ProfileIcon />
					<p onClick={() => onRouteChange('signout')} className='white pointer dim'>SIGN OUT</p>
				</div>
			);
		} else {
			return (
				<nav className='navigation pt4 pb4 bg-black f6 link black'>
					<div onClick={() => onRouteChange('signout')} className='white pointer dim pr3'>SIGN IN</div>
					<div onClick={() => onRouteChange('register')} className='white pointer dim pr3'>REGISTER</div>
				</nav>
			);
		}
}

export default Navigation;