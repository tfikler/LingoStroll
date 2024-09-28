import React, { useContext } from 'react';
import { SelectionContext } from '../Context';
import './LeftNavBar.css';
const LeftNavBar = () => {
    const { selections } = useContext(SelectionContext);

    // Extract only "PrevLocations"
    const { prevLocations } = selections;

    // If no previous locations are available, don't render anything
    if (!prevLocations || prevLocations.length === 0) {
        return null; // Return null if there are no locations, hiding the navbar
    }

    return (
        <div className="left-navbar">
            <h3 className="nav-title">Places That You Already Visited!</h3>
            <ul className="visited-list">
                {prevLocations.map((location, index) => (
                    <li key={index} className="visited-item">
                        {location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftNavBar;
