import React from "react";
import { connect } from 'react-redux';
import InputGroup from './InputGroup';
import  { createPhoto} from "../shared/photoActions";
 class FormTemplate extends React.Component {
    constructor(props){
		super(props);
		
		this.state = {
            name: "",
            photo: "",
            description: "",
            featured: ""
		}
		this.handleChange = this.handleChange.bind(this);

	}
    
    handleChange(inputFromInputGroup){
       
		this.setState(inputFromInputGroup);
	}
 	handleSubmit(e){
		e.preventDefault();
	    const{name, photo, description, featured} = this.state;
		const {saveHandler} = this.props;
		const data = {name, photo, description, featured};
		createPhoto( data);
       	saveHandler();
	}

 
  render() {
	

	let{name, photo, description, featured} = this.state;

    return (
     
        <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <InputGroup 
						type="text" 
						label="name" 
						placeHolder="Enter name"
						val={name? name: ""}
                        className="form-control"
						name="name"
						required="true"
                        changeHandler={this.handleChange}
					/>
                    <InputGroup 
						type="text" 
						label="Description" 
						placeHolder="Enter description"
						val={description?description: ""}
                        className="form-control"
						name="description"
						required="true"
						changeHandler={this.handleChange}
					/>              
                    <InputGroup 
						type="text" 
						label="Photo" 
						placeHolder="Enter photo link"
						val={photo?photo: ""}
                        className="form-control"
						name="photo"
						required="true"
                        changeHandler={this.handleChange}
					/> 
                                 
              
                    <InputGroup 
						type="text" 
						label="featured" 
						placeHolder="Enter true or false"
						val={featured?featured: ""}
                        className="form-control"
						name="featured"
						required="true"
                        changeHandler={this.handleChange}
					/>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>
            </form>
        </div>
        
        
    );
  }
}
function mapStateToProps(state){
    return {

    }
}
export default connect(mapStateToProps, { createPhoto } ) (FormTemplate);