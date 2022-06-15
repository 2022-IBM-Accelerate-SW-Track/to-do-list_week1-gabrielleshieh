import React, { Component } from 'react';
import "./About.css";
import gabby from "src/assets/IMG_8989.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={gabby}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Gabby Shieh</div>
            <div className="brief_description">
              // Hi! I'm Gabby. I am a rising junior at Brown University studying computer science. 
            </div>
          </div>
        </div>
      </div>
    )
  }
}