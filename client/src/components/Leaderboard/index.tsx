import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../api/db.ts';
import { logEvent } from '../../ga4.js';
import './Leaderboard.css';

function Leaderboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const languages = ['Spanish', 'French', 'German', 'English'];

    useEffect(() => {

        logEvent('leaderboard', 'viewed_leaderboard');
        const fetchUsers = async () => {
            const users = await getAllUsers();
            setUsers(users);
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // Create leaderboards for each language
    const leaderboards = languages.reduce((acc, language) => {
        const scoreKey = `${language}_score`;
        acc[language] = [...users]
            .filter(user => user[scoreKey] !== undefined)
            .sort((a, b) => {
                return parseInt(b[scoreKey], 10) - parseInt(a[scoreKey], 10);
            });
        return acc;
    }, {});

    return (
        <div className="leaderboard-container">
            <h1>Leaderboard</h1>
            {languages.map(language => (
                <div key={language} className="language-section">
                    <h2>{language.charAt(0).toUpperCase() + language.slice(1)} Leaderboard</h2>
                    <table className="leaderboard-table">
                        <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {leaderboards[language].map((user, index) => (
                            <tr key={user._id.$oid}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user[`${language}_score`]}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
            {/* Add some spacing at the bottom */}
            <div style={{ marginBottom: '50px' }}></div>
        </div>
    );
}

export default Leaderboard;
