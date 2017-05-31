import React from "react";
import {Carousel } from 'react-bootstrap';


export default class CarouselTemplate extends React.Component {
  render() {
    const {photos} = this.props;
    let photoList= "";
  
    if(photos){
      
     
      photoList = photos.map((photo,i)=> 
    
            
        <Carousel.Item key={i}>
            <div >
              <img width={500} height={500} alt="" src={photo.photo} />
            </div>
            
            <Carousel.Caption>
              <h3>{photo.name}</h3>
              <p>{photo.description}</p>
             
            </Carousel.Caption>
        </Carousel.Item>
      );
      
   
    }
   
    return (
      
      <Carousel>
        {photoList}
      </Carousel>
    );
  }
}