import React from 'react';
import spinner from './spinner.gif';

const Loading = () => {
	return(
			<div className="mt1 center">
              <img alt="loading" src={spinner} width="540px" height="260px"/>
            </div>
	);
}

export default Loading;