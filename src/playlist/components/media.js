import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css'
class Media extends PureComponent {
     state = {
     	author: 'AleO1120'
     }

	//constructor (props) {
		//super(props)
		//this.state = {
		//	author: props.author
		//}
		//this.handleClick = this.handleClick.bind(this);
	//}
	handleClick = (event) => {
		//console.log(this.props.image)
		this.setState({
			author: 'Alejandro Ortegano',
		})
	}
	render(){
		return(
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img className="Media-image" src={this.props.cover} alt="" width={260} height={160}/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
			)
	}

}

// Validando tipado en propiedades

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;
