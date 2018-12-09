import React from 'react';
import FullScreenIcon from '../../icons/components/screen';
import './full-screen.css'

const FullScreen = (props) => (
	<div 
	className="FullScreen"
	onClick={props.handleFullScreenClick}
	>
		<FullScreenIcon
			color='white'
			size={25}
		/>
	</div>
	)

export default FullScreen;