import React, { Component } from 'react';

export default class InputGroup extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		const { changeHandler } = this.props;
       
		changeHandler({[e.target.name]:e.target.value});
	}

	render(){
		const {  label, placeHolder, name, required, type, className, val } = this.props;
		return (
			<div className="form-group">
				<label htmlFor={label}>{label}</label>
				<input 
					id={label} 
					type={type} 
					placeholder={placeHolder} 
					value={val} 
					name={name}
                    required={required}
                    className={className}
                    onChange={this.handleChange}
					 />
			</div>
		)
	}
}

