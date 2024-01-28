import React from "react";
import bgImg from "../../assets/about-hero.png";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './about.css'

export default function About() {
    return (
        <div className="container-fluid about-page-container">
            <div className="row">
                <div className="col-md-6">
                    <img src={bgImg} className="img-fluid about-hero-image" alt="img" />
                </div>
                <div className="col-md-6">
                    <div className="about-page-content">
                        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    </div>
                    <div className="about-page-cta">
                        <h2>Your destination is waiting.<br />Your van is ready.</h2>
                        <Link className="btn btn-primary" to="/vans">Explore our vans</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
