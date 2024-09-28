import React, {useContext, useEffect, useRef, useState} from 'react';
import {GoogleMap, StreetViewPanorama, LoadScript, useJsApiLoader, Marker} from "@react-google-maps/api";
import {SelectionContext} from "../Context";
import PropTypes from "prop-types";
import { logEvent } from "../../ga4";
import {AmericanQuestions} from "../AmericanQuestions/index.tsx";
import {PromptForNewRankOrLocation} from "../PromptForNewRankOrLocation/index.tsx";
import {MiniMap} from "../miniMap/index.tsx";
import zIndex from "@mui/material/styles/zIndex";
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
    const [markerBounderies, setMarkerBounderies] = useState({});


    const onLoad = React.useCallback(function callback(map) {
        logEvent('Game Page', 'Google Map Loaded - user start playing game');
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
            setMarkerBounderies(selections.languageAndRankData.markerBoundaries[1])
        }
        if(selections.currentLevel === 3){
            setMarkerLocations(selections.languageAndRankData.markerLocations[2])
            setMarkerBounderies(selections.languageAndRankData.markerBoundaries[2])
        }
        if(selections.currentLevel === 4){
            logEvent('Game Page', 'User finished the game at the location - prompt for new rank or location');
            setIsPromptForNewRankOrLocation(true);
        }
    }, [selections.conversationOn]);

    useEffect(() => {
        setMarkerLocations(selections.languageAndRankData.markerLocations[0])
        setMarkerBounderies(selections.languageAndRankData.markerBoundaries[0])
        setStartPoint(selections.languageAndRankData.location)
        updateSelection('currentLevel', 1);
        setIsPromptForNewRankOrLocation(false);
    }, [selections.languageAndRankData, selections.rank]);

    useEffect(() => {
        updateSelection('currentLevel', 1);
    }, []);

    const checkIfMarkerVisible = () => {
        if (!panorama) return; // Ensure panorama is defined
        if (!markerBounderies) return;
        const { h_lat, l_lat, h_lng, l_lng } = markerBounderies;

        // const h_lat = 19.25077270000321;
        // const l_lat = 19.25075315899132;
        //
        // const h_lng = -99.00386166708303;
        // const l_lng = -99.00399941771481;
        const position = panorama.getPosition();
        if (position.lat() >= l_lat) {
            console.log('lat is bigger than lowest')
            if (position.lat() <= h_lat) {
                console.log('lat is smaller than highest')
                if (position.lng() >= l_lng) {
                    console.log('lng is smaller than lowest')
                    if (position.lng() <= h_lng) {
                        console.log('lng is bigger than highest')
                        console.log('returning true')
                        console.log(`current pos: ${position.lat()} - ${position.lng()}`)
                        return true;
                    }
                }
            }
        }
        console.log(`Marker not visible at lat: ${position.lat()} and lng: ${position.lng()}. Expected between lat: ${h_lat} >= ${position.lat()} >= ${l_lat} and lng: ${l_lng} <= ${position.lng()} <= ${h_lng}`);
        return false;
    }

    const handlePositionChange = () => {
        const visible = checkIfMarkerVisible();
        setMarkerVisible(visible);
        console.log(`Marker visibility updated to: ${visible}`);
    };

    const handleStartConversation = () => {
        console.log('Starting conversation...');
        logEvent('Game Page', `User started conversation at marker number ${selections.currentLevel}`);
        updateSelection('conversationOn', true);
        setConversationOn(true);
    };


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
            {markerVisible && (
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
            {map && <GoogleMap
                zoom={16}
                streetView={panorama}
                // onLoad={(map) =>  map.setStreetView(panorama)}
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
            </GoogleMap>}

        </>
    ) : <></>
}

GoogleStreet.propTypes = {
    sectionDescription: PropTypes.element,
}

export default GoogleStreet;