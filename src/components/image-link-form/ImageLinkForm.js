import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div>
			<p className='f4 fw3'>
				{'Enter image URL'}
			</p>
			<div className='center'>
				<div className='form bg-light-blue center ph3 ml3 pa3 br3 shadow-3'>
					<input className='f4 ph3 w-80 mr3' type='text' onChange={onInputChange} />
					<button className='detect f5 link bw1 br-pill pa2 ph3 pv2 center dim pointer white bg-light-blue'
						onClick={onButtonSubmit}>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;