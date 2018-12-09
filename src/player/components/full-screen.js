import React from 'react';
import FullScreenIcon from '../../icons/components/screen';


const FullScreen = (props) => (
	<div 
	clasName="FullScreen"
	onClick={props.handleFullScreenClick}
	>
		<FullScreenIcon
			color='white'
			size={25}
		/>
	</div>
	)

export default FullScreen;