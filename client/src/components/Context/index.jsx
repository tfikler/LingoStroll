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
export const UserContext = createContext({user: {},  updateUser: {}});

// Create a Provider component for UserContext
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});  // State to hold the user data

    const updateUser = (newUserData) => {
        setUser(newUserData);
    }

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};