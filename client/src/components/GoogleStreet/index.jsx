import React, {useContext, useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {GoogleMap, StreetViewPanorama, LoadScript, useJsApiLoader, Marker} from "@react-google-maps/api";
import {SelectionContext} from "../Context";
import PropTypes from "prop-types";
import {AmericanQuestions} from "../AmericanQuestions/index.tsx";
import {PromptForNewRankOrLocation} from "../PromptForNewRankOrLocation/index.tsx";
const containerStyle = {
    height: '100%',
    width: '100%'
};

const GoogleStreet = (props) => {
    const { selections, updateSelection } = useContext(SelectionContext);
    const [markerLocations, setMarkerLocations] = useState(selections.languageAndRankData.markerLocations[0]);
    const {isLoaded, loadError} = useJsApiLoader({
        id: 'google-map-script',
        //googleMapsApiKey: 'AIzaSyDPbgEOXEYQk0xG5xi5cfTyejQIxlKd1bw'
        //Noa's api key
        googleMapsApiKey: '',
    });
    const [markerVisible, setMarkerVisible] = useState(false);
    const [map, setMap] = useState(null);
    const [miniMap, setMiniMap] = useState(null);
    const [panorama, setPanorama] = useState(null);
    const [conversationOn, setConversationOn] = useState(false);
    const [isPromptForNewRankOrLocation, setIsPromptForNewRankOrLocation] = useState(false);
    const [startPoint, setStartPoint] = useState(selections.languageAndRankData.location);


    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, []);
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    useEffect(() => {
        if (map) {
            // Ensure map.getStreetView() is called only after the map is fully loaded
            try {
                setPanorama(map.getStreetView());
                checkIfMarkerVisible(panorama);
            } catch (error) {
                console.error('Failed to get Street View:', error);
            }
        }
    }, [map]); // This effect runs only once when the map is set

    useEffect(() => {
        if (miniMap){
            try {
                setPanorama(miniMap.getStreetView());
                checkIfMarkerVisible(panorama);
            } catch (error) {
                console.error('Failed to get Street View:', error);
            }
        }
    }, [miniMap]);

    useEffect(() => {
        if (!selections.conversationOn){
            setConversationOn(false);
        }
        if (selections.currentLevel === 2) {
            setMarkerLocations(selections.languageAndRankData.markerLocations[1])
            setIsPromptForNewRankOrLocation(true);
            // navigate('/endGame');
        }
        if(selections.currentLevel === 3){
            setMarkerLocations(selections.languageAndRankData.markerLocations[2])
        }
        if(selections.currentLevel === 4){
        }
    }, [selections.conversationOn]);

    useEffect(() => {
        setMarkerLocations(selections.languageAndRankData.markerLocations[0])
        setStartPoint(selections.languageAndRankData.location)
        updateSelection('currentLevel', 1);
    }, [selections.languageAndRankData]);

    useEffect(() => {
        updateSelection('currentLevel', 1);
    }, []);

    const checkIfMarkerVisible = () => {
        if (!panorama) return; // Ensure panorama is defined
        const position = panorama.getPosition();
        // Check if the latitude and longitude are within the specified bounds
        if (position.lat() >= 37.38583 && position.lat() <= 37.38587 &&
            position.lng() <= -5.99379 && position.lng() >= -5.9909) {
            console.log('returning true')
            console.log(`current pos: ${position.lat()} - ${position.lng()}`)
            return true;
        }
        console.log(`Marker not visible at lat: ${position.lat()} and lng: ${position.lng()}. Expected between lat: 37.38583 to 37.38587 and lng: -5.99279 to -5.99209`);
        return false;
    }

    const handlePositionChange = () => {
        const visible = checkIfMarkerVisible();
        setMarkerVisible(visible);
        console.log(`Marker visibility updated to: ${visible}`);
    };

    const handleStartConversation = () => {
        console.log('Starting conversation...');
        updateSelection('conversationOn', true);
        setConversationOn(true);
    };

    const handlePositionChangeMiniMap = () => {

    };
    // const startPoint = selections.languageAndRankData.location;


    return isLoaded ? (
        <>
        <GoogleMap
            id={'tomer'}
            mapContainerStyle={containerStyle}
            center={startPoint}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {true && (
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    position={markerLocations}
                    icon={{
                        path: window.google.maps.Circle, // Use a predefined shape or your own custom image
                    }}
                    onClick={() => handleStartConversation()}
                    animation={window.google.maps.Animation.BOUNCE}
                />
            )}
            {conversationOn && <AmericanQuestions />}
            {isPromptForNewRankOrLocation && <PromptForNewRankOrLocation />}
            <StreetViewPanorama
                position={startPoint}
                visible={true}
                onPositionChanged={handlePositionChange}
            />
        </GoogleMap>
            {/* Way to get the panorama works - load it without streetView, and only after its all loads, add streetview */}
            <GoogleMap
                zoom={16}
                streetView={panorama}
                onLoad={(map) =>  map.setStreetView(panorama)}
                center={startPoint}
                mapContainerStyle={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    width: '300px',
                    height: '300px',
                    border: '2px solid black',
                    zIndex: 1
            }}>
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    position={markerLocations}
                    icon={{
                        path: window.google.maps.Circle, // Use a predefined shape or your own custom image
                    }}
                    animation={window.google.maps.Animation.BOUNCE}
                />
            </GoogleMap>

        </>
    ) : <></>
}

GoogleStreet.propTypes = {
    sectionDescription: PropTypes.element,
}

export default GoogleStreet;