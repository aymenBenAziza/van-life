import { Link, useLoaderData } from "react-router-dom";
import { getVansForUser, deleteVanById } from "../../api"; // Assuming deleteVanById is an API function for deleting a van
import { useState } from "react";

export const loader = async () => {
    return await getVansForUser();
};

export default function HostVan() {
    const vans = useLoaderData();
    const [vansList, setVansList] = useState(vans);
    const [deletingVanId, setDeletingVanId] = useState(null); // State to track which van is being deleted

    const handleDelete = async (id) => {
        try {
            setDeletingVanId(id); // Set the van being deleted
            await deleteVanById(id);
            setVansList(vansList.filter(van => van.id !== id));
        } catch (error) {
            console.error("Failed to delete van", error);
        } finally {
            setDeletingVanId(null); // Reset the deleting state after the operation
        }
    };

    const vansElements = vansList.map(van => (
        <div key={van.id} className="van-tile col-md-6 col-lg-4 mb-3">
            <Link to={`${van.id}`}>
                <img src={van.imageUrl} alt={van.name} className="img-fluid" />
            </Link>
            <div className="van-info d-block">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
            <button 
                onClick={() => handleDelete(van.id)} 
                className="btn btn-danger mt-2"
                disabled={deletingVanId === van.id} // Disable the button if this van is being deleted
            >
                {deletingVanId === van.id ? "Deleting" : "Delete"}
            </button>
        </div>
    ));

    return (
        <div className="van-list-container d-flex flex-wrap">
            {vansElements}
        </div>
    );
}
