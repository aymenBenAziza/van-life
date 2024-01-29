import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './vansDetail.css';


const VansDetails = () => {
    const params = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id]);

    return (
        <div className="container mt-5">
            {van ? (
                <div className="row van-detail">
                    <div className="col-lg-6">
                        <img src={van.imageUrl} className="img-fluid" alt={van.name} />
                    </div>
                    <div className="col-lg-6">
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="btn btn-primary">Rent this van</button>
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    );
};

export default VansDetails;
