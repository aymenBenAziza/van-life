import React from "react";
import { Link } from "react-router-dom";
import './vans.css'

export default function Vans() {
    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, []);

    const vanElements = vans.map(van => (
        <div key={van.id} className="col-lg-4 col-md-6 mb-4 van">
            <Link to={`/vans/${van.id}`} className="van-link">
                <div className="van-tile">
                    <img src={van.imageUrl} className="img-fluid" alt={van.name} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
            </Link>
        </div>
    ));

    return (
        <div className="container vans mt-5">
            <h1 className="text-center">Explore our van options</h1>
            <div className="row">
                {vanElements}
            </div>
        </div>
    );
}
