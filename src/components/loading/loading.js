import React from 'react';
import './loading.css';
import spinner from './spinner.gif';

const Loading = () => {
	return(
			<div className="center pv6">
              <img className="loading" alt="load" src={spinner} />
			</div>
	);
}

export default Loading;