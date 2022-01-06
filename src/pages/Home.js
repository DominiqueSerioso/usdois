import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/campus.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer" >
                <h1>University of Nueva Caceres</h1>
                <p> Sports Development Office Information System</p>
                <Link to="/login">
                     <button> LOGIN </button>
                </Link>   
            </div>
        </div>
    )
}

export default Home
