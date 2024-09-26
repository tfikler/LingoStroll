import React, { useContext, useState } from 'react';
import { SelectionContext } from "../Context";
import { getDataForLanguageAndRank } from "../../api/languages.ts";
import { useNavigate } from 'react-router-dom';
import { logEvent } from "../../ga4.js";

export const PromptForNewRankOrLocation = () => {
    const { selections, updateSelection } = useContext(SelectionContext);
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleChoice = async (option) => {
        if (option === 'Change Rank') {
            logEvent('PromptForNewRankOrLocation', 'User chose to change rank')
            const newRank = selections.rank + 1;
            updateSelection('rank', newRank);
        } else if (option === 'Change Location') {
            logEvent('PromptForNewRankOrLocation', 'User chose to change location')
            const prevLocation = selections.languageAndRankData.name;
            let newPrevLocations = selections.prevLocations ? [...selections.prevLocations, prevLocation] : [prevLocation];

            updateSelection('prevLocations', newPrevLocations);

            const newData = await getDataForLanguageAndRank(
                selections.language,
                selections.rank,
                newPrevLocations
            );
            updateSelection('languageAndRankData', newData);
        }
    };

    return (
        <>
            {isModalVisible && (
                <div
                    id="changeModal"
                    style={{
                        color: 'black',
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '40%',
                        maxWidth: '600px',
                        height: 'auto',
                        maxHeight: '80%',
                        zIndex: 10000,
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        padding: '25px',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                        overflowY: 'auto',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                    }}
                >
                    <div>
                        <h2>Congrats!</h2>
                        <h2>You just finished traveling to this location!</h2>
                        <h4>Choose an option:</h4>
                    </div>
                    <button
                        style={{
                            padding: '10px',
                            margin: '10px 0',
                            borderRadius: '5px',
                            border: 'none',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleChoice('Change Rank')}
                    >
                        Change Rank
                    </button>
                    <button
                        style={{
                            padding: '10px',
                            margin: '10px 0',
                            borderRadius: '5px',
                            border: 'none',
                            backgroundColor: '#008CBA',
                            color: 'white',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleChoice('Change Location')}
                    >
                        Change Location
                    </button>
                </div>
            )}
        </>
    );
};
