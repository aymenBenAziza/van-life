
export const getVans = async () => {
    const response = await fetch('/api/vans')
    if (response.ok) {
        const data = await response.json()
        return data
    } else if (!response.ok) {
        throw Error("Failed to fetch vans data")
    }
}

export const getVansForUser = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const response = await fetch('/api/vans/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user?.token}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch vans'); // Throw error if response not ok
        return
    }

    const vans = await response.json(); // Assuming the response is JSON
    return vans
}

export const getVan = async (id) => {
    const response = await fetch(`/api/vans/${id}`)
    if (response.ok) {
        const data = await response.json()
        return data
    } else if (!response.ok) {
        throw Error("Failed to fetch vans data")
    }
}

export async function loginUser(creds) {
    const res = await fetch("/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
    });

    const json = await res.json()

    if (!res.ok) {
        throw {
            message: json.error,
            statusText: res.statusText,
            status: res.status
        }
    }
    return json
}


export const signup = async (creds) => {
    const res = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
    });

    const json = await res.json()

    if (!res.ok) {
        throw {
            message: json.error,
            statusText: res.statusText,
            status: res.status
        }
    }
    return json
}


export const createReview = async (review) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({ name: user.user.email, ...review, userId: user.user._id }),
    });

    const json = await res.json()

    if (!res.ok) {
        throw {
            message: json.error,
            statusText: res.statusText,
            status: res.status
        }
    }
    return json
}



export const getReviews = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await fetch("/api/reviews", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${user?.token}`
        }
    });

    const json = await res.json()

    if (!res.ok) {
        throw {
            message: json.error,
            statusText: res.statusText,
            status: res.status
        }
    }
    return json
}



export const deleteReview = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const response = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${user?.token}`
        }
    })

    const json = await response.json()

    if (!response.ok) {
        throw json
    }

    return json
}


export const deleteVanById = async (id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const response = await fetch(`/api/vans/user/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${user?.token}`
        }
    })

    const json = await response.json()

    if (!response.ok) {
        throw json
    }

    return json
}