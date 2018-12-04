import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
	handleSubmit = envent => {
		event.preventDefault();
		console.log(this.input.value ,'submit')
	}

	setInputRef = element => {
		this.input = element;
	}

	render() {
		return (
			<Search
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
			/>
			)
	}
}


export default SearchContainer;
