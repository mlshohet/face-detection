import React from 'react';
import spinner from './spinner.gif';

const Loading = () => {
	return(
			<div className="mt6 center">
              <img alt="loading" src={spinner} width="250px" height="auto"/>
            </div>
	);
}

export default Loading;