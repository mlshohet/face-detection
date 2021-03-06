import React from 'react';
import './Profile.styles.css';

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: this.props.user.name,
			age: this.props.user.age,
			pet: this.props.user.pet
		}
	}

	onFormChange = (event) => {
		switch(event.target.name) {
			case 'user-name':
				this.setState({name: event.target.value})
				break;
			case 'user-age':
				this.setState({age: event.target.value})
				break;
			case 'user-pet':
				this.setState({pet: event.target.value})
				break;
			default:
				return;
		}
	}

	onProfileUpdate = (data) => {
		//Heroku deployment
		fetch(`https://salty-reaches-64216.herokuapp.com/profile/${this.props.user.id}`, {
		//Local dev
		//fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
			method: 'post',
			headers: {
            'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem('token')
          	},
			body: JSON.stringify({ formInput: data })
		}).then(res => {
			if (res.status === 200 || res.status === 304) {
				this.props.toggleModal();
				this.props.loadUser({ ...this.props.user, ...data });
			}
		})
		.catch(err => {
			console.log("Update failed. ", err )
		})
	}

	render() {
		const { user } = this.props;
		const { name, age, pet } = this.state;
		return (
			<div className="profile-modal">
				<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
						<main className="pa4 black-80 w-80">
							<img
		      				src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/robot-01-icon.png"
		      				className="br-100 h3 w3 dib" alt="avatar" />
		      				<h1>{this.state.name}</h1>
		      				<h4>{`Image Submitted: ${user.entries}`}</h4>
		      				<p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
		      				<hr />
				        	<label className="mt2 fw6" htmlFor="user-name">Name:</label>
				        	<input
				        		onChange={this.onFormChange}
				        		className="pa2 ba w-100"
				        		placeholder={user.name}
				        		type="text"
				        		name="user-name"
				        		id="username"
				        	/>
				        	<label className="mt2 fw6" htmlFor="user-age">Age:</label>
				        	<input
				        		onChange={this.onFormChange}
				        		className="pa2 ba w-100"
				        		placeholder="45"
				        		type="text"
				        		name={user.age}
				        		id="age"
				        	/>
				        	<label className="mt2 fw6" htmlFor="user-name">Pet:</label>
				        	<input
				        		onChange={this.onFormChange}
				        		className="pa2 ba w-100"
				        		placeholder="dragon"
				        		type="text"
				        		name={user.pet}
				        		id="pet"
				        	/>
				        	<div className="mt4" style={{ display: "flex", justifyContent: "space-evenly" }}>
				        		<button 
				        			onClick={() => this.onProfileUpdate({name, age, pet})}
				        			className="modal-button f6 link br-pill ph4 pv2 mt1 center dim bg-light-blue pointer">
				        			Save 
				        		</button>
				        		<button
				        			className="modal-button f6 link br-pill ph4 pv2 mt1 center dim bg-light-red pointer"
				        			onClick={this.props.toggleModal}
				        		>
				        			Cancel
				        		</button>
				        	</div>
						</main>
						<div className='modal-close' onClick={this.props.toggleModal}>&times;</div>
				</article>
			</div>
		);
	}
}

export default Profile;




