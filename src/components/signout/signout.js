import React from 'react';
import './Signout.css';

const Signout = ({ onRouteChange }) => {
	return(
		<div className='center'>
			<button className='signout f6 link br-pill ph3 pv2 mt4 center dim bg-transparent pointer'
				onClick={() => { onRouteChange('signout') }}>
					Sign Out
			</button>
		</div>
	);
}

export default Signout;