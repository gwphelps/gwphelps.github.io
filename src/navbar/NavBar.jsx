import React, { Component } from "react";
import HamburgerMenu from "./HamburgerMenu.jsx";
import "./navbar.css";
class NavBar extends Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.setDisplayMenu = this.setDisplayMenu.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {
      previousY: 0,
      transition: "none",
      displayMenu: false
    };
  }

  componentDidMount() {
      if(this.props.disappearOnScroll){
        window.addEventListener('scroll', this.handleScroll);
      }
  }

  componentWillUnmount(){
      if(this.props.disappearOnScroll){
          window.removeEventListener('scroll', this.handleScroll);
      }
  }
  handleScroll() {
    console.log(window.scrollY);
    if(window.scrollY < this.state.previousY && this.state.transition == "slideup"){
      this.setState({transition: "none"});
    }
    else if(window.scrollY > this.state.previousY && this.state.transition == "slidedown"){
      this.setState({transition: "none"});
    }

    if(window.scrollY > 50 && this.state.transition == "none"){
      if(this.state.previousY < window.scrollY){
        console.log("slideup");
        this.setState({transition: "slideup"});
      }
      else{
        console.log("slidedown");
        this.setState({transition: "slidedown"});
      }
    }
    this.setState({previousY: window.scrollY});
  }

  getTransition() {
    let returnStr = "";
    if(this.state.transition == "slideup"){
      returnStr += " slideup";
    }
    else if(this.state.transition == "slidedown"){
      returnStr += " slidedown";
    }
    return returnStr;
  }
  setDisplayMenu(isOn){
    this.setState({displayMenu: isOn});
  }
  redirect(item){
    this.setState({displayMenu: false});
    this.props.redirect(item);
  }
  render(){
    return(
      <div className="nav-fixed">
        <div className={`navbar${this.getTransition()}`}>
          <HamburgerMenu
            pages={this.props.pages}
            transition={this.getTransition()}
            displayMenu={this.state.displayMenu}
            setDisplayMenu={this.setDisplayMenu}
            disappearOnScroll={this.props.disappearOnScroll}
            redirect={this.redirect}
          />
          <h1 onClick={() => this.setState({displayMenu: false}, this.props.redirect("Home"))} className="title">{this.props.title}</h1>
          <div></div>
          <div className="pages">
            {this.props.pages.map((item, index) => <p className="page" key={index} onClick={() => this.props.redirect(item)}>{item}</p>)}
          </div>
        </div>
      </div>
    );
  }
}


export default NavBar;
