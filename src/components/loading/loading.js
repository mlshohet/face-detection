import React from 'react';
import './loading.css';
import spinner from './spinner.gif';

const Loading = () => {
	return(
              <img className="loading mt1 center" alt="loading" src={spinner} />
	);
}

export default Loading;