import React from 'react';
import './Profile.styles.css';

const Profile = ({ isProfileOpen, toggleModal, user }) => {
	return (
		<div className="profile-modal">
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
					<main className="pa4 black-80 w-80">
						<img
	      				src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/robot-01-icon.png"
	      				className="br-100 h3 w3 dib" alt="avatar" />
	      				<h1>{user.name}</h1>
	      				<h4>{`Image Submitted: ${user.entries}`}</h4>
	      				<p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
	      				<hr />
			        	<label className="mt2 fw6" htmlFor="user-name">Name:</label>
			        	<input
			        		className="pa2 ba w-100"
			        		placeholder={user.name}
			        		type="text"
			        		name="user-name"
			        		id="username"
			        	/>
			        	<label className="mt2 fw6" htmlFor="user-age">Age:</label>
			        	<input
			        		className="pa2 ba w-100"
			        		placeholder="45"
			        		type="text"
			        		name={user.age}
			        		id="age"
			        	/>
			        	<label className="mt2 fw6" htmlFor="user-name">Pet:</label>
			        	<input
			        		className="pa2 ba w-100"
			        		placeholder="dragon"
			        		type="text"
			        		name={user.pet}
			        		id="pet"
			        	/>
			        	<div className="mt4" style={{ display: "flex", justifyContent: "space-evenly" }}>
			        		<button className="modal-button f6 link br-pill ph4 pv2 mt1 center dim bg-light-blue pointer">
			        			Save 
			        		</button>
			        		<button
			        			className="modal-button f6 link br-pill ph4 pv2 mt1 center dim bg-light-red pointer"
			        			onClick={toggleModal}
			        		>
			        			Cancel
			        		</button>
			        	</div>
					</main>
					<div className='modal-close' onClick={toggleModal}>&times;</div>
			</article>
		</div>
	);
}

export default Profile;