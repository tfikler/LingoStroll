import React, { useState, useEffect } from 'react';
import {getAllUsers} from "../../api/db.ts";

function Leaderboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const languages = ['Spanish', 'French', 'German', 'English'];

    useEffect(() => {
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
        acc[language] = [...users].sort((a, b) => {
            return parseInt(b[scoreKey], 10) - parseInt(a[scoreKey], 10);
        });
        return acc;
    }, {});

    return (
        <div>
            <h1>Leaderboard</h1>
            {languages.map(language => (
                <div key={language}>
                    <h2>{language.charAt(0).toUpperCase() + language.slice(1)} Leaderboard</h2>
                    <table>
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
        </div>
    );
}

export default Leaderboard;
