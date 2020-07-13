import React, { Component } from "react";


class Contact extends Component {
  render(){
    return(
      <div className="content-area">
        <div className="text-area">
          <h2>Contact</h2>
          <div className="sites">
            <i className="fa fa-envelope fa-2x"></i>
            <p style={{paddingLeft: "10px"}}>garetphelps@gmail.com</p>
          </div>
          <div className="sites">
            <i className="fa fa-github fa-2x"></i>
            <a href="https://github.com/gwphelps" style={{paddingLeft: "10px"}}>github.com/gwphelps</a>
          </div>
          <div className="sites">
            <i className="fa fa-linkedin fa-2x"></i>
            <a href="https://www.linkedin.com/in/garet-phelps/" style={{paddingLeft: "10px"}}>linkedin.com/in/garet-phelps</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
