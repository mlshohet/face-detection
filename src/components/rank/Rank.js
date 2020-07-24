import React from 'react';
import './rank.css';

const Rank = ({ name, entries }) => {
	return(
		<div className='rank bg-black f6 white pa2 pl5'>
			<div>
				{`Welcome, ${name}. Your face detection count is ${entries}.`}
			</div>
		</div>
	);
}

export default Rank;