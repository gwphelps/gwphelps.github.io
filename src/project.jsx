import React, { Component } from "react";

class Project extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getClass = this.getClass.bind(this);
    this.getDisplay = this.getDisplay.bind(this);
    this.getClickMessage = this.getClickMessage.bind(this);
    this.hideProject = this.hideProject.bind(this);
    this.unHideProject = this.unHideProject.bind(this);
  }

  handleClick(){
    this.props.projectFocus(this.props.id, this.props.focused);
  }
  getClass(e){
    let classStr = "";
    if(!this.props.focused && !this.props.unfocused){
      classStr += " fade-in";
    }
    else{
      if(this.props.focused) {
        classStr += " focused-project";
      }
      else if(this.props.unfocused){
        classStr += " unfocused-project";
      }
    }
    return classStr;
  }
  unHideProject() {
    this.props.unHide(this.props.id);
  }
  getDisplay(){
    return (this.props.focused) ? "flex" : "none";
  }
  getClickMessage(){
    return (this.props.focused) ? "click to return" : "click to expand";
  }
  hideProject() {
    return (this.props.hidden) ? "none" : "block";
  }
  render(){
    return(
      <div className={"project"+this.getClass()} style={{display: this.hideProject()}} onClick={this.handleClick}>
        <div className="project-header">
          <h2>{this.props.title}</h2>
        </div>
        <img src={"./images/"+this.props.image} height="300px" width="300px" className="square-img-mid"/>
        <div style={{display: this.getDisplay()}}>{this.props.content}</div>
        <p className="project-text">{this.getClickMessage()}</p>
      </div>
    );
  }
}

export default Project;
