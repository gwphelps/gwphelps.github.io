import React, { Component } from "react";

class Home extends Component {
  render(){
    return(
      <div className="content-area">
        <div className="text-area">
          <p>Hi, this is my website! I am a recent grad from Iowa State University with a B.S.
          in Computer Engineering. I am looking for a job in Software Engineering.
          Check out the rest of my website for more information!</p>
          <a href="./src/resume2020.pdf">Resume</a>
        </div>
      </div>
    );
  }
}

export default Home;
