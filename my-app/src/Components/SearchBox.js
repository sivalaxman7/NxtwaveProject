import React from 'react';
import { ReactComponent as Searchicon } from "../../src/search.svg"

const SearchBox = (props) => {
	return (
		<div >
			<Searchicon style={{position: 'relative',left:"25px", top:"5px"}}/>
			<input className='input-bar'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder="Search"
			/>
		</div>
	);
};

export default SearchBox;