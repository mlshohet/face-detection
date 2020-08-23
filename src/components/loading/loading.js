import React from 'react';
import './loading.css';
import spinner from './spinner.gif';

const Loading = () => {
	return(
			<div className="center mb5">
              <img className="loading" alt="loading" src={spinner} />
			</div>
	);
}

export default Loading;