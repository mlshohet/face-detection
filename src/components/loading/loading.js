import React from 'react';
import './loading.css';
import spinner from './spinner.gif';

const Loading = () => {
	return(
              <img className="loading mb5 center" alt="loading" src={spinner} />
	);
}

export default Loading;