import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, boxes }) => {
	return (
		<div className='center ma'>
			<div className='relative mt3'>
				<img id="inputimage" alt='submit' src={imageURL} width='500px' height='auto'/>
				{
					boxes.map(box => {
						return <div key={box.bottomRow} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
					})
				}
			</div>
		</div>
	)
}

export default FaceRecognition;