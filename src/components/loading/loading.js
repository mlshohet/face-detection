import React from 'react';
import './loading.css';
import spinner from './spinner.gif';

componentDidMount() {
	document.body.style.overflow = 'auto';
}

const Loading = () => {
	return(
			<div className="mt1 center">
              <img className="loading" alt="loading" src={spinner} />
            </div>
	);
}

export default Loading;