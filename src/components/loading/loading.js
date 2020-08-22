import React from 'react';
import spinner from './spinner.gif';

const Loading = () => {
	return(
			<div>
              <img className="pv3 center" alt="loading" src={spinner} width="540px", height="260px"/>
            </div>
	);
}

export default Loading;