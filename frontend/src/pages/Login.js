import React from "react";
import { useLoaderData, useNavigation, Form, redirect, useActionData, Navigate, Link } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    try {
        const json = await loginUser({ email, password });
        localStorage.setItem('user', JSON.stringify(json));
        localStorage.setItem('loggedin', true);
        return redirect("/host");
    } catch (err) {
        return err.message;
    }
}

export default function Login() {
    const errorMessage = useActionData();
    const message = useLoaderData();
    const navigation = useNavigation();
    const isLoggedIn = localStorage.getItem('loggedin');
    if (isLoggedIn) {
        return <Navigate to={"/profile"} />;
    }

    return (
        <div className="login-container">
            <h1>Log in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form
                method="post"
                className="login-form"
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
                <p className="mt-3 sign up">Don't have an account? <Link to="/signup" className="signUp">Sign up now</Link></p>
            </Form>
        </div>
    );
}
