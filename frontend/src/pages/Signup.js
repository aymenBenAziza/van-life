import {
    useNavigation,
    Form,
    useActionData,
} from "react-router-dom";
import { signup } from "../api";
import { useEffect, useState } from "react";

export const action = async ({ request }) => {
    try {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get("password");
        const json = await signup({ email, password });
        return null;
    } catch (err) {
        return err.message;
    }
};

export default function Signup() {
    const errorMessage = useActionData();
    const navigation = useNavigation();
    const [successText, setSuccessText] = useState("");

    useEffect(() => {
        if (errorMessage === null && navigation.state === "idle") {
            setSuccessText("Signed up successfully! Go ahead and log in.");
        } else {
            setSuccessText("");
        }
    }, [errorMessage, navigation.state]);

    return (
        <div className="login-container">
            <h1>Welcome to our community!</h1>
            <p>Sign up to create your account and join our community to unlock exclusive features!</p>
            {errorMessage && <h3 className="red">{errorMessage}</h3>}
            <Form
                method="post"
                className="login-form"
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
                    type="submit"
                >
                    {navigation.state === "submitting"
                        ? "Signing up..."
                        : "Sign up"
                    }
                </button>
                {successText && <p>{successText}</p>}
            </Form>
        </div>
    );
}
