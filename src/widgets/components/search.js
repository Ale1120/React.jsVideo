import React from 'react';
import './search.css';

const Search = (props) => (
	<form
		className="Search"
		onSubmit={props.handleSubmit}
	>
		<input
			ref={props.setRef}
			type="text"
			placeholder="Busca Tu video Favorito"
			className="Search-input"
			name="search"
			//defaultValue="holis"
			value={props.value}
		/>
	</form>
)

export default Search;
