import React, { Component } from "react";

class About extends Component {
  render(){
    return(
      <div className="content-area">
        <div className="text-area">
          <h2 style={{display: "block", margin: "auto"}}>About</h2>
          <img style={{display: "block", margin: "auto"}} src="./src/suit_boi.jpg" height="300px" width="300px"/>
          <p>
            I am a recent graduate from Iowa State with a b.s. in Computer Engineering. My coursework was very diverse, ranging from software development to computer architecture and circuits. My focus was in software, and did several software projects throughout my classes.
            <br/><br/>My skills are mainly in web development. I have done several projects using Node.js and MySQL, as well as some projects with React.js. I have good knowledge of Java and C, which were the languages my college classes were taught in.
            <br/><br/>I’ve been interested in STEM from a young age, doing things like First Lego League in middle school. When I was approaching graduation from high school I knew I wanted to do engineering, but wasn’t sure what type. I eventually settled on Computer Engineering, mostly stemming from a curiosity toward how they work.
            <br/><br/>In my free time I like to play the guitar and listen to music. I also run a bit.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
