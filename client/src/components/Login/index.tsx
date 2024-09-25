import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../Context'; 


export const Login = () => {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // Function to handle form submission
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/db/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name:username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setUser();
                console.log('Login successful');
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            setLoginError(error.message);
            console.error('Login failed:', error);
        }
    };

    useEffect(() => {
        // Possibly check session on mount
        console.log('Component mounted');
    }, []);

    return (
        <div className="login-form">
            <h2>Login</h2>
            {loginError && <p className="error">{loginError}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

Login.propTypes = {
    // Define your PropTypes here if needed
};

