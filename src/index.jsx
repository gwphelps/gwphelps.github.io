import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./home.jsx";
import Projects from "./projects.jsx";
import Education from "./education.jsx";
import Contact from "./contact.jsx";
import About from "./about.jsx";
import NavBar from "./navbar/NavBar.jsx"

class HomeComponent extends Component {
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
    this.state = {
      content: <Home/>
    };
  }
  redirect(route){
    let state = "";
    switch(route){
      case "Home": state = <Home/>;break;
      case "About": state = <About/>;break;
      case "Education": state = <Education/>;break;
      case "Projects": state = <Projects/>;break;
      case "Contact": state = <Contact/>;break;
    }
    if(state != ""){
      this.setState({content: state});
    }
  }
  render(){
    return(
      <div>
        <NavBar
          title="Garet Phelps"
          pages={
            ["About", "Education", "Projects", "Contact"]
          }
          disappearOnScroll={false}
          redirect={(route) => this.redirect(route)}
        />
        <div id="content">
          {this.state.content}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HomeComponent />, document.getElementById("root"));
