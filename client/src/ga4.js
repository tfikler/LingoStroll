// analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize('G-EHPDH7L5D1'); // Replace with your Measurement ID
};

export const logPageView = () => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category = '', action = '') => {
    if (category && action) {
        ReactGA.event({ category, action });
    }
};
