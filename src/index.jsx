import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import Education from "./education.jsx";
import Contact from "./contact.jsx";

class HomeComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: <Home/>
    };

  }
  render(){
    return(
      <div>
        <div id="header">
          <div id="name">
            <h1 className="clickable" onClick={() => this.setState({content:<Home/>})}>Garet Phelps</h1>
          </div>
          <ul id="nav">
            <li className="nav-item clickable">About</li>
            <li className="nav-item clickable" onClick={() => this.setState({content: <Education/>})}>Education</li>
            <li className="nav-item clickable" onClick={() => this.setState({content: <Projects/>})}>Projects</li>
            <li className="nav-item clickable" onClick={() => this.setState({content: <Contact/>})}>Contact</li>
          </ul>
        </div>
        <div id="content">
          {this.state.content}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HomeComponent />, document.getElementById("root"));
