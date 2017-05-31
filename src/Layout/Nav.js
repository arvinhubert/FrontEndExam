import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {


  render() {
   
    return (
      <nav className="navbar navbar-inverse navbar-fixed">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className=" navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li className="active">
                <IndexLink to="/">Home</IndexLink>
               </li>
              <li> <Link to="productmngmt" >Product Mngmt</Link></li>

            </ul>
          </div>
        </div>
      </nav>      

    );
  }
}