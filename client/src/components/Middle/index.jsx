import React, {useState, Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { SelectionContext } from '../Context';
import './features10.css';

const Middle = (props) => {
    const { selections, updateSelection } = useContext(SelectionContext);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedRank, setSelectedRank] = useState(0);
    const navigate = useNavigate();

    const handleLanguageSelect = (language) => {
        updateSelection('language', language);
        setSelectedLanguage(language);
        setSelectedRank(0); // Reset rank selection when changing language
    };

    const handleRankSelect = (rank) => {
        updateSelection('rank', rank);
        setSelectedRank(rank);
        navigate('/game'); // Navigate to the game route after rank selection
    };

    const renderLanguageSelection = () => (
        <div className="features10-content">
            {['English', 'Spanish', 'French'].map((language, index) => (
                <div key={index} className="features10-feature" onClick={() => handleLanguageSelect(language)}>
                    <h3>{language}</h3>
                </div>
            ))}
        </div>
    );

    const renderRankSelection = () => (
        <div className="features10-content">
            {[1, 2, 3].map((rank) => (
                <div key={rank} className="features10-feature" onClick={() => handleRankSelect(rank)}>
                    <h3>Rank {rank}</h3>
                </div>
            ))}
        </div>
    );

    return (
        <div className="features10-layout">
            <div className="features10-max-width">
                <div className="features10-section-title">
                    <h2>Welcome to Language Mastery</h2>
                    <p>
                        {selectedLanguage ? `Select your rank for ${selectedLanguage}:` : 'Choose a language to get started:'}
                    </p>
                </div>
                {!selectedLanguage ? renderLanguageSelection() : renderRankSelection()}
            </div>
        </div>
    );
}

Middle.propTypes = {
  sectionDescription: PropTypes.element,
}

export default Middle;