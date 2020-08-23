import React from 'react';
//import './loading.css';
import spinner from './spinner.gif';

const Loading = () => {
	return(
			<div>
              <img className="mb5 center" alt="loading" src={spinner} />
			</div>
	);
}

export default Loading;