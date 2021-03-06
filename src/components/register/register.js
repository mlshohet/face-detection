import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value});
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	saveAuthTokenInSesson = (token) => {
		window.sessionStorage.setItem('token', token);
	}

	onSubmitSignin = () => {
		if (this.state.name === '' ||
			this.state.email === '' ||
			this.state.password === '') {
				this.props.onRouteChange('signin');
		} else {
			this.props.onRouteChange('loading');
			//Line below for dev. Comment before deployment.
			//fetch('http://localhost:3000/register', {
			//Uncomment below for Heroku deployment
			fetch('https://salty-reaches-64216.herokuapp.com/register', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': window.sessionStorage.getItem('token')
				},
				body: JSON.stringify({
					name: this.state.name,
					email: this.state.email,
					password: this.state.password
				})
			})
			.then(response => response.json())
			.then(data => {
				if (data.userId && data.success === 'true') {
					this.saveAuthTokenInSesson(data.token);
			          //Heroku deployment
			          fetch(`https://salty-reaches-64216.herokuapp.com/profile/${data.userId}`, {
			          //Local dev
			          //fetch(`http://localhost:3000/profile/${data.userId}`, {
			              method: 'get',
			              headers: {
			                'Content-Type': 'application/json',
			                'Authorization': data.token
			              }
			          })
			          .then(res => res.json())
			          .then(user => {
			            if (user && user.email) {
			              console.log(user);
			              this.props.loadUser(user);
			              this.props.onRouteChange('home');
			            }
			          })
				      .catch(console.log)
				} 
			})
			.catch((err) => {
				console.log("Server Error")
				}
			)
		}
	}

	render() {
		return(
			<div>
				<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
			  			<div className="measure">
			    		<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      		{/*	<legend className="f4 fw6 ph0 mh0">Sign In</legend>*/}
			      		<div className="mt3">
			        		<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        		<input className="pa2 input-reset ba bg-transparent w-100"
			        		type="text"
			        		name="username"
			        		id="username"
			        		onChange = { this.onNameChange }
			        		/>
			      		</div>
			     		 <div className="mt3">
			        		<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        		<input className="pa2 input-reset ba bg-transparent w-100"
			        		type="email"
			        		name="email-address" 
			        		id="email-address"
			        		onChange = { this.onEmailChange }
			        		/>
			      		</div>
			      		<div className="mv3">
			        		<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        		<input className="pa2 input-reset ba bg-transparent w-100"
			        		type="password"
			        		name="password" 
			        		id="password"
			        		onChange = { this.onPasswordChange }
			        		/>
			      		</div>
			    		</fieldset>
			    		<div className="">
			      			<input 
			      				onClick={ this.onSubmitSignin }
			      				className="ph3 pv2 input-reset ba b--black bg-transparent br-pill dim pointer f6 dib" 
			      				type="submit" 
			      				value="Register" 
			      			/>
			    		</div>
			  		</div>
					</main>
				</article>
			</div>
		);
	}
}

export default Register;