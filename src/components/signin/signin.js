import React from 'react';

class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	saveAuthTokenInSession = (token) => {
		window.sessionStorage.setItem('token', token)

	}

	onSubmitSignin = () => {
		if (this.state.signInEmail === '' ||
			this.state.signInPassword === '') {
				this.props.onRouteChange('signout');
		} else {
			this.props.onRouteChange('loading');
			//Line below for dev only. Comment out before deployment
			//fetch('http://localhost:3000/signin', {
			//Line below for heroku. Uncomment before deployment
			fetch('https://salty-reaches-64216.herokuapp.com/signin', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.signInEmail,
					password: this.state.signInPassword
				})
			})
			.then(response => response.json())
			.then(data => {
				if (data.userId && data.success === 'true') {
					this.saveAuthTokenInSession(data.token);
					//Heroku deployment
					fetch(`https://salty-reaches-64216.herokuapp.com/profile/${data.userId}`, {
					//Local host dev
		          	//	fetch(`http://localhost:3000/profile/${data.userId}`, {
		              		method: 'get',
		              		headers: {
		               		 'Content-Type': 'application/json',
		              		 'Authorization': data.token
		             		}
		          		})
		        		.then(res => res.json())
		        		.then(user => {
		            		if (user && user.email) {
		              			this.props.loadUser(user);
		              			this.props.onRouteChange('home');
            				}
          				})
				}
			});
		}
	}

	render() {
		const { onRouteChange } = this.props;
		return(
			<div>
				<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
			  			<div className="measure">
			    		<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      		{/*	<legend className="f4 fw6 ph0 mh0">Sign In</legend>*/}
			     		 <div className="mt3">
			        		<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        		<input 
			        			className="pa2 input-reset ba bg-transparent w-100"
			        			type="email"
			        			name="email-address"
			        			id="email-address" 
			        			onChange={this.onEmailChange}
			        			/>
			      		</div>
			      		<div className="mv3">
			        		<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        		<input 
			        			className="pa2 input-reset ba bg-transparent w-100" 
			        			type="password" 
			        			name="password"  
			        			id="password" 
			        			onChange={this.onPasswordChange}
			        			/>
			      		</div>
			    		</fieldset>
			    		<div>
			      			<input 

			      				onClick= {this.onSubmitSignin}
			      				className="ph3 pv2 input-reset ba b--black bg-transparent br-pill dim pointer f6 dib" 
			      				type="submit" 
			      				value="Sign In" 
			      			/>
			    		</div>
			    		<div className="lh-copy mt3">
			      			<p onClick={() => onRouteChange('register')}
			      			className="f6 pointer link dim black db">Register</p>
			    		</div>
			  			</div>
					</main>
				</article>
			</div>
		);
	}
}

export default Signin;