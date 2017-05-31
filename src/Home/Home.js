import React from "react";
import { connect } from 'react-redux';
import  {getFeaturedPhotos, getAllPhotos} from "../shared/photoActions";
import CarouselTemplate from "./CarouselTemplate";
import CatalogueTemplate from "./CatalougueTemplate";
 class Home extends React.Component {
  componentWillMount(){
   
		const { getFeaturedPhotos, getAllPhotos } = this.props;
		    getFeaturedPhotos();
        getAllPhotos();
       
	}
  render() {
   let {featuredPhotos, allPhotos} = this.props;
   console.log(featuredPhotos)
   
    let allPhotosList = "";
    if(allPhotos){
      
     allPhotosList = allPhotos.map(function(photo,i){
        return <CatalogueTemplate key={i} data={photo}/>;
      })
     
    }
    
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="well text-center">
                <CarouselTemplate photos={featuredPhotos ? featuredPhotos: ""} />
            </div>
          </div>
        </div>

        <div className="row">
            {allPhotosList}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  
	return {
		featuredPhotos: state.homeReducer.featuredPhotos,
        allPhotos: state.homeReducer.allPhotos
	}
}
export default connect(mapStateToProps, { getFeaturedPhotos, getAllPhotos } ) (Home);