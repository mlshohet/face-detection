import React from 'react';



class ProfileIcon extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			dropDownOpen: false
		}
	}

	render() {
		return (
			<div className="pa2 tc">
  				<img
      				src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/robot-01-icon.png"
      				className="br-100 h3 w3 dib" alt="avatar" />
			</div>
		)
	}
}

export default ProfileIcon;