import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './vansDetail.css';


const VansDetails = () => {
    const params = useParams();
    const [van, setVan] = useState(null);
    const location = useLocation();
    const search = location.state?.search || "";
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id]);

    return (
        <div className="container mt-5">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to vans</span></Link>
            {van ? (
                <div className="row van-detail">
                    <div className="col-lg-6">
                        <img src={van.imageUrl} className="img-fluid" alt={van.name} />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    </div>
                    <br/>
                    <div className="col-lg-6">
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="btn btn-primary">Rent this van</button>
                        <br />
                        <br />
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    );
};

export default VansDetails;
