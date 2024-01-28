import React, { useEffect, useState } from "react";
import './vans.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { NavLink } from "react-router-dom";

export default function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, []);

    const vanElements = vans.map(van => (
        <div key={van.id} className="col-lg-4 col-md-6 mb-4">
            <NavLink to={`vans/${van.id}`} className="van-link">
                <div className="van-tile">
                    <img alt="van car image" src={van.imageUrl} className="img-fluid" />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
            </NavLink>
        </div>
    ));

    return (
        <div className="container mt-5">
            <h1 className="text-center">Explore our van options</h1>
            <div className="row">
                {vanElements}
            </div>
        </div>
    );
}
