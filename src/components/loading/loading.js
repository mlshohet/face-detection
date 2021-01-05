import React from 'react';
import Spinner from '../spinner/spinner';
import './loading.css';
//import spinner from './spinner.gif';

const Loading = () => {
	return(
		<div className='flex items-center justify-center h5'>
			<Spinner />
		</div>
	);
}

export default Loading;