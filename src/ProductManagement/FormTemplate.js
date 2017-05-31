import React from "react";
import { connect } from 'react-redux';
import InputGroup from './InputGroup';
import  { createPhoto, updatePhoto} from "../shared/photoActions";
 class FormTemplate extends React.Component {
    constructor(props){
		super(props);
		
		this.state = {
			id:"",
            name: "",
            photo: "",
            description: "",
            featured: ""
		}
		this.handleChange = this.handleChange.bind(this);

	}
	componentWillReceiveProps(nextProps){
		this.setState(nextProps.data);
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
	handleUpdate(e){
		e.preventDefault();
		 const{name, photo, description, featured, id} = this.state;
		
		 const data = {name, photo, description, featured};
		 const {saveHandler} = this.props;
		 updatePhoto(id, data);
		 saveHandler();
	}

 
  render() {
	

	let{name, photo, description, featured, id} = this.state;


    return (
     
        <div>
            <form onSubmit={id?this.handleUpdate.bind(this):this.handleSubmit.bind(this)}>
				<InputGroup 
						type="hidden" 
						label="" 
						placeHolder=""
						val={id?id: ""}
                        className="form-control"
						name="id"
                        changeHandler={this.handleChange}
					/>
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
						val={featured?featured: "false"}
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
export default connect(mapStateToProps, { createPhoto, updatePhoto } ) (FormTemplate);