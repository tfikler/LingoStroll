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