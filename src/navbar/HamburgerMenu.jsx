import React, { Component } from "react";
import ScrollLock from "react-scrolllock";
import "./hamburgerMenu.css";
class HamburgerMenu extends Component {
  constructor(props){
    super(props);
    this.setPopout = this.setPopout.bind(this);
    this.state = {
      init: false
    };
  }
  setPopout(){
    if(this.props.displayMenu){
      return "hamb-pop-out popped-out-menu";
    }
    else if(this.state.init){
      return "hamb-pop-out popped-in-menu";
    }
    else{
      return "hamb-pop-out";
    }
  }
  render(){
    return(
      <div className="hamburger-menu">
        <ScrollLock isActive={this.props.displayMenu}/>
        <div className="black-background"
          style={{width: (this.props.displayMenu) ? "100vw" : "0"}}
          onClick={() => this.props.setDisplayMenu(false)}
          ></div>
        <div className={this.setPopout()}>
          {this.props.pages.map((item, index) => <h3 key={index} onClick={() => this.props.redirect(item)}>{item}</h3>)}
        </div>
        <div
          className={`hamburger-box${this.props.transition}`}
          onClick={
            () => {
              if(this.props.displayMenu){
                this.props.setDisplayMenu(false);
              }
              else {
                this.setState({init: true}, this.props.setDisplayMenu(true));
              }
            }
          }>
          <div className={(this.props.displayMenu) ? "bar focused-bar" : "bar"}></div>
          <div className="non-bar"></div>
          <div className={(this.props.displayMenu) ? "bar focused-bar" : "bar"}></div>
          <div className="non-bar"></div>
          <div className={(this.props.displayMenu) ? "bar focused-bar" : "bar"}></div>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
