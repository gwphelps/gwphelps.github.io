import React, { Component } from "react";

class Education extends Component {
  render(){
    return (
      <div className="content-area">
        <div className="text-area">
          <h3>Iowa State University</h3>
          <h3>b.s. Computer Engineering</h3>
          <p>GPA: 3.50</p>
          <p>Dean's List: Fall 2017, Fall 2018, Fall 2019</p>
          <p>Courses Taken (Languages used)</p>
          <ul>
            <li>Algorithms and Data Structures (Java)</li>
            <li>Software Architecture (Java)</li>
            <li>Intro to Database Management Systems (Java, MySQL)</li>
            <li>Software Project Management</li>
            <li>Software Development Practices (Node.js)</li>
            <li>Operating Systems (C)</li>
            <li>Intro to Software Architecture and Construction of User Interfaces (JavaScript)</li>
            <li>Intro to OOP (Java)</li>
            <li>intro to Embedded Systems (C)</li>
            <li>Intro to Data Structures (Java)</li>
            <li>Digital Logic</li>
            <li>Computer Organization and Assembly-Level Programming (MIPS)</li>
            <li>Theoretical Foundations of Computer Engineering</li>
          </ul>
        </div>
      </div>

    );
  }
}

export default Education;
