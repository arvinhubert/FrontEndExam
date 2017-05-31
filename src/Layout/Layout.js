import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";


export default class Layout extends React.Component {

  render() {
         

    return (
      <div>
        <Nav />
         

        <div className="container" >
          <div className="row">
            <div className="col-lg-12">
              <h1>YTS.ag</h1>
             
                {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}