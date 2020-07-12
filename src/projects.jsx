import React, { Component } from "react";
import Project from "./project.jsx";

class Projects extends Component {
  constructor(props){
    super(props);
    this.projectFocus = this.projectFocus.bind(this);
    this.loadProjects = this.loadProjects.bind(this);
    this.state = {
      projects: [
        {
          hidden:false,
          title:"Intelligent Code Editor",
          image:"ice22.png",
          focused: false,
          unfocused: false,
          content:
          <div>
            <p><b>Date:</b> August 2019 - May 2020</p>
            <p><b>Members:</b> 6</p>
            <p><b>Skills:</b> Java, Python, Natural Language Processing, aws</p>
            <p><b>Awards, etc:</b> 1st Place Project Award</p>
            <p>
              <b>Description:</b> This project was my senior capstone project for Computer Engineering. It is a plugin for the IntelliJ IDE that translates natural English text into Java method invocations. The plugin uses OpenNMT-py to achieve this, run on an AWS EC2 server. My role for this project was the frontend (java), natural language processing (python), and refinement of the dataset. I also managed the reports for the project.
            </p>
          </div>
        },
        {
          hidden:false,
          title:"Social Media",
          image:"social2.png",
          focused: false,
          unfocused: false,
          content:
          <div>
            <p><b>Date:</b> May 2020 - June 2020</p>
            <p><b>Members:</b> solo</p>
            <p><b>Skills:</b> html/css, React.js, Node.js, MySQL</p>
            <p>
              <b>Description:</b> Social Media is a social media website similar to Twitter. The difference from Libertas is that this was a solo project, so I made the React frontend as well.
            </p>
          </div>
        },
        {
          hidden:false,
          title:"My Portfolio",
          image:"portfolio.png",
          focused: false,
          unfocused: false,
          content:
          <div>
            <p><b>Date:</b>June 2020 - July 2020</p>
            <p><b>Members:</b> solo</p>
            <p><b>Skills:</b> html/css, React.js</p>
            <p>
              <b>Description:</b> This website is also a project of mine! This is my first decent attempt at responsive web development. The goal was for it to look good on any device.
            </p>
          </div>
        },
        {
          hidden:false,
          title:"Libertas",
          image:"libertas2.png",
          focused: false,
          unfocused: false,
          content:
          <div>
            <p><b>Date:</b> March 2019 - May 2019</p>
            <p><b>Members:</b> 4</p>
            <p><b>Skills:</b> Node.js, MySQL, Express.js</p>
            <p>
              <b>Description:</b> Libertas is a social media web application similar to twitter. It has the ability to create an account, follow friends, and post images and text. My role was the Node.js backend and the MySQL database.
            </p>
          </div>
        },
        {
          hidden:false,
          title:"Snakesweepr",
          image:"snek2.png",
          focused: false,
          unfocused: false,
          content:
          <div>
            <p><b>Date:</b>January 2019 - May 2019</p>
            <p><b>Members:</b> 4</p>
            <p><b>Skills:</b> Node.js, MySQL, Express.js</p>
            <p>
              <b>Description:</b> Snakesweepr is a mobile game for Android. It is a multiplayer game that combines the functionality of Snake and Minesweeper. The frontend was written in Android, and the backend in Node.js, with a MySQL database. My role in the project was the Node.js backend, specifically the database calls and the server-side game logic.
            </p>
          </div>
        },
        {
          hidden:false,
          title:"Snake Battle",
          image:"snekbattle.jpg",
          focused: false,
          unfocused: false,
          content:
          <div>
            <p><b>Date:</b> November 2019 - December 2019</p>
            <p><b>Members:</b> solo</p>
            <p><b>Skills:</b> React.js, C#, .net</p>
            <p>
              <b>Description:</b> A quick project I whipped up while learning the basics of .net. Game interface was made using HTML canvas. It's a multiplayer web game based off of snake.
            </p>
          </div>
        },
        {
          hidden:false,
          title:"Mars Rover",
          image:"rover.png",
          focused: false,
          unfocused: false,
          content:
          <div>
            <p><b>Date:</b> April 2018 - May 2018</p>
            <p><b>Members:</b> 2</p>
            <p><b>Skills:</b> C, Embedded Systems</p>
            <p>
              <b>Description:</b> This was the final project for my embedded systems class. It was an imitation of writing the code to command the mars rover. It sends sensor data and we used that data to determine how to get through a maze without looking at the course.
            </p>
          </div>
        }
      ]
    };
  }
  componentDidMount(){
    this.loadProjects();
  }

  projectFocus(id, focused){
    let projects = this.state.projects;

    for(let i = 0; i < projects.length; i++){
      if(focused){
        projects[i].hidden = false;
        if(i == id){
          projects[i].focused = false;
          projects[i].unfocused = true;
        }
        else{
          projects[i].unfocused = false;
        }
      }
      else{
        if(i != id){
          projects[i].hidden = true;
        }
        else{
          projects[i].focused = true;
          projects[i].unfocused = false;
        }
      }

    }
    this.setState({projects: projects});
    this.loadProjects();

  }
  unHide(id){
  }
  loadProjects(){
    let projectsComp = [];
    let projects = this.state.projects;
    for(let i = 0; i < projects.length; i++){
      let project = projects[i];
        projectsComp.push(
          <Project
            id={i}
            hidden={projects[i].hidden}
            title={projects[i].title}
            image={projects[i].image}
            content={projects[i].content}
            focused={projects[i].focused}
            unfocused={projects[i].unfocused}
            projectFocus={(id, focused) => this.projectFocus(id, focused)}
            unHide={(id) => this.unHide(id)}
          />
        );
    }
    this.setState({projectsComp: projectsComp});
  }
  render(){
    return(
      <div id="projects">
        {this.state.projectsComp}
      </div>
    );
  }
}

export default Projects;
