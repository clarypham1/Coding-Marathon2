import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    // Store email typed by the user
    const [email, setEmail] = useState("");

    // Store password typed by the user
    const [password, setPassword] = useState("");

    // Store error message
    const [error, setError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Clear previous error
        setError(null);

        const loginInformation = {
            email: email,
            password: password
        }

        if (email !== "test@gmail.com" || password !== "11111111")
        {setError ("username or email is wrong");
            return;
        }

        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const user = await response.json();

            console.log("Response status:", response.status);
            console.log("Response data:", user);

            // If login failed
            if (!response.ok) {
                setError(user.error);
                return;
            }

            // Save logged-in user
            localStorage.setItem("user", JSON.stringify(user));

            console.log("Login successful");

            // Tell App that the user is authenticated
            setIsAuthenticated(true);

            // Go to home page
            navigate("/");
        } catch (error) {
            console.error("Login request failed:", error);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="Log-In">
            <h2>Log in</h2>

            <form onSubmit={handleFormSubmit}>
                <label>
                    Email Address:
                </label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>
                    Password:
                </label>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Log in
                </button>

                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Login;