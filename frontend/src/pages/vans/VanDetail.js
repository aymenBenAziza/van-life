import { Link, useLoaderData, useNavigate, useNavigation } from "react-router-dom"
import { getVan } from "../../api"
import { useState, useEffect } from "react"

export async function loader({ params }) {
    return await getVan(params.id)
}

export default function VanDetail() {
    const [loggedin, setLoggedin] = useState(false)
    const [message, setMessage] = useState(null)
    const [text, setText] = useState("rent this van")

    const van = useLoaderData()
    const navigate = useNavigate()
    const navigation = useNavigation()

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("loggedin")
        setLoggedin(loggedInStatus === "true")
    }, [])

    const handleClick = async () => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (loggedin) {
            setText('renting...')
            const response = await fetch("/api/vans", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${user?.token}`
                },
                body: JSON.stringify({ ...van, userId: user.user?._id })
            })

            const json = await response.json()

            if (response.ok) {
                setText('rent this van')
                if (json.message) {
                    setMessage(json.message)
                } else if (!json.message) {
                    setMessage("Van rented successfully")
                }
            } else {
                console.error("Failed to rent a van")
            }
        } else {
            navigate('/login')
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4 mt-3">
                    <Link to=".." relative="path" className="back-button">&larr; <span>Back to vans</span></Link>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <img src={van.imageUrl} className="img-fluid" alt="Van car" />
                </div>
                <div className="col-md-6">
                    <div className="van-detail">
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <i className={`van-type mb-3 ${van.type} selected`}>{van.type}</i>
                        <p>{van.description}</p>
                        <button disabled={text === "renting..."} className="btn btn-primary" onClick={handleClick}>
                            {text}
                        </button>
                        {message && (
                            <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
