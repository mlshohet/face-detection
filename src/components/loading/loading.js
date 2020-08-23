import React from 'react';
import './loading.css';
import spinner from './spinner.gif';

const Loading = () => {
	return(
			<div className="center mt6 mb5">
              <img className="loading" alt="load" src={spinner} />
			</div>
	);
}

export default Loading;