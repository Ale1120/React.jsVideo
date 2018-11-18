import React from 'react';
import Media from './media.js'
import './playlist.css';
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import Volumen from '../../icons/components/volumen'
import Screen from '../../icons/components/screen'
function Playlist (props){
	const playlist = props.data.categories;
	return (
		<div className="Playlist">
		{
			playlist.map((item) => {
            	 return (
            	  <div className="Playlist">
									<Play
										size={30}
										color="black"
									/>
									<Pause
										size={30}
										color="black"
									/>
									<Volumen
										size={30}
										color="black"
									/>
									<Screen
										size={30}
										color="black"
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
