import React from "react";

export default class CatalogueTemplate extends React.Component {
  render() {
    const {data} = this.props;
    let date_created = new Date(data.date_created * 1000);
  
    return (
      <div className="col-sm-3">
        <a href="/">
          <div>
            <img className="img-responsive" src={data.photo} width="210" height="315" alt=""/>
            
          </div>
        </a>
        <div >
          <a href="/" >{data.name}</a>
         </div>
        <div>
          <p> FEATURED: {data.featured.toString()} </p>
        </div>
        <div>
            <p> {date_created.toString()} </p>
        </div>
        
      </div>
    );
  }
}