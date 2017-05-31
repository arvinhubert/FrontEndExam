import React from "react";
import { connect } from 'react-redux';
import  { getAllPhotos, deletePhoto, getPhoto} from "../shared/photoActions";
import FormTemplate from "./FormTemplate";
export class ProductManagement extends React.Component {

    constructor(){
        super();
        this.state = {
            photoData: ""
        }
        this.handleSave = this.handleSave.bind(this);
    }
    componentWillMount(){
        
		const { getAllPhotos } = this.props;
        getAllPhotos();

       
	}
    handleEdit(id){
   
       const {getPhoto, photo} = this.props;
       getPhoto(id);
      this.setState({photoData: photo});
    }
    handleDelete(id){
        const { deletePhoto, allPhotos } = this.props;
		deletePhoto(id);
      
        this.setState({allPhotos: allPhotos});
    
    }
    handleSave(){
        const {allPhotos} = this.props;
        this.setState({allPhotos: allPhotos});
    }
  render() {
    const {allPhotos, photoData} = this.props;
    
   
    let photoList = "";
    if(allPhotos){
        photoList = allPhotos.map((photo) =>
 			<tr key={photo.id}>
				<td>{photo.name}</td>
				<td>{photo.description}</td>
				<td>
                    <img src={photo.photo} alt=""/>
                </td>
                <td>{photo.featured?'true':'false'}</td>
                <td>
                    <button className="btn btn-info" onClick={this.handleEdit.bind(this, photo.id)}>edit</button>
                </td>
				<td>
					<button className="btn btn-danger" onClick={this.handleDelete.bind(this, photo.id)}>delete</button>
				</td>
			</tr>           
        )
    }
    return (
     
      <div>
        <div className="row">
          <div className="col-lg-6">
            <div className="well text-center">
                <FormTemplate saveHandler={this.handleSave} data={photoData} />
            </div>
          </div>
        </div>

        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Photo</th>
                        <th>Featured</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {photoList}
                </tbody>	
            </table>          
        </div>
      </div>
      
    );
  }
}
function mapStateToProps(state){
  

	return {

        allPhotos: state.productMngmtReducer.photos,
        photoData:  state.productMngmtReducer.photo
	}
}
export default connect(mapStateToProps, { getAllPhotos, deletePhoto, getPhoto } ) (ProductManagement);