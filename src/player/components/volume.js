import React from 'react';
import VolumeIcon from '../../icons/components/volumen';
import Mute from '../../icons/components/volumen';
import './volume.css' ;

function Volume(props) {
	return (
		<button className='Volume' onClick={props.handleVolumeToggle}>
			{
				props.volume ?
					<VolumeIcon
						color="white"
						size={25}
					/>
				:
					<Mute 
						color="white"
						size={25}
					/>
			}
			<div className='Volume-range'>
				<input 
				type='range'
				min={0}
				max={1}
				step={.05}
				onChange={props.handleVolumeChange}
				value={props.volume}
				/>
			</div>
		</button>
		)
}

export default Volume;