import React, { createContext, useState } from 'react';

export const SelectionContext = createContext({selections: {}, updateSelection: {}});

export const SelectionProvider = ({ children }) => {
    const [selections, setSelections] = useState({});

    const updateSelection = (key, value) => {
        setSelections(prevSelections => ({
            ...prevSelections,
            [key]: value,
        }));
    };

    return (
        <SelectionContext.Provider value={{ selections, updateSelection }}>
            {children}
        </SelectionContext.Provider>
    );
};
// Create a context for user data management
export const UserContext = createContext({
    user: null,  // Initial state of the user
    setUser: () => {}  // Function to update the user
});

// Create a Provider component for UserContext
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);  // State to hold the user data

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};