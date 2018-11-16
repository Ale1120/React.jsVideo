import React from 'react';
import Media from './media.js'
import './playlist.css';
import Play from '../../icons/components/play'

function Playlist (props){
	const playlist = props.data.categories;
	return (
		<div className="Playlist">
		{
			playlist.map((item) => {
            	 return (
            	  <div className="Playlist">
									<Play
										size={50}
										color="red"
									/>
            	  	<h2>{item.title}</h2>
            	  	{ item.playlist.map((playlist) => <Media {...playlist} key={playlist.id} />) }
				</div>
				 );
			})
		}
		</div>
		)
}



export default Playlist;
