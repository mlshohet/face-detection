import React from 'react';
import './rank.css';



class Rank extends React.Component {
	constructor() {
		super();
		this.state = {
			emoji: ''
		}
	}

	componentDidMount() {
		this.generateEmoji(this.props.entries)
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
			return null;
		}
		this.generateEmoji(this.props.entries);
	}

	generateEmoji = entires => {
		fetch(`https://t4mv72u239.execute-api.us-east-1.amazonaws.com/dev/rank?rank=${this.props.entries}`)
			.then(response => response.json())
			.then(data => this.setState({ emoji: data.input }))
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div className='rank bg-black f6 white pa2 pl5 db'>
				<div>
					{`Welcome, ${this.props.name}. Your face detection count is ${this.props.entries}.`}
				</div>
				<div className='f3'>
					{`${this.state.emoji}`}
				</div>
			</div>
		);
	}
}

export default Rank;