import React, { useContext } from 'react';
import { SelectionContext } from '../Context';

const LeftNavBar = () => {
    const { selections } = useContext(SelectionContext);

    if (!selections.rank || selections.rank === 0) {
        return null; // Return null if no rank is selected, hiding the navbar
    }

    return (
        <div className="left-navbar">
            <h3>Your Selections</h3>
            {Object.entries(selections).map(([key, value]) => (
                <div key={key} className="selection-item">
                    <p>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</p>
                </div>
            ))}
        </div>
    );
}

export default LeftNavBar;