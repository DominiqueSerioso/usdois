import React from 'react';
import Logo from "../assets/UNCHeader.png";
import "../styles/About.css";
function About() {
    return (
        <div className="about">
            <div className="aboutTop"
             style={{backgroundImage: `url(${Logo})`}}
            ></div>
            <div className="aboutBottom"> 
                <h1>ABOUT US</h1>
                <p>The University of Nueva Caceres, is a private non-sectarian university in Naga City, Bicol Region, Philippines. It is ran by iPeople, Inc., a joint venture of Ayala Corporation and Yuchengco Group of Companies. It is the oldest and the first university in southern Luzon. </p>
            </div>
        </div>
    );
}

export default About
