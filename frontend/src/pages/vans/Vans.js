import { getVans } from "../../api"
import { Link, useLoaderData, useSearchParams } from "react-router-dom"

export const loader = async () => {
    return getVans()
}

export default function Vans() {

    const vans = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    const handleFilterChange = (key, value) => {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vansList = displayedVans.map(van => (
        <div key={van.id} className="van-tile col-md-6 col-lg-4 mb-3">
            <Link to={van.id} className="d-block">
                <img src={van.imageUrl} alt={van.name} className="img-fluid" />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
            </Link>
        </div>
    ));



    return (
        <>
            <div className="van-list-filter-buttons my-4 mx-3">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple mx-1
            ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury mx-1
            ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged mx-1
            ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list-container d-flex flex-wrap">
                {vansList}
            </div>
        </>
    )
}