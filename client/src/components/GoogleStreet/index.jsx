import React, {useContext, useEffect, useRef, useState} from 'react';
import {GoogleMap, StreetViewPanorama, LoadScript, useJsApiLoader, Marker} from "@react-google-maps/api";
import {SelectionContext} from "../Context";
import PropTypes from "prop-types";
const containerStyle = {
    height: '100%',
    width: '100%'
};

const center = {
    lat: 37.3863048,
    lng: -5.9922559
};

const GoogleStreet = (props) => {
    const { selections, updateSelection } = useContext(SelectionContext);
    const {isLoaded, loadError} = useJsApiLoader({
        id: 'google-map-script',
        //googleMapsApiKey: 'AIzaSyDPbgEOXEYQk0xG5xi5cfTyejQIxlKd1bw'
        //Noa's api key
        googleMapsApiKey: '',
    });
    const [markerVisible, setMarkerVisible] = useState(false);
    const [map, setMap] = useState(null);
    const [panorama, setPanorama] = useState(null);
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

    const cafeIcon = {
        url: './fenix.png',
        scaledSize: new window.google.maps.Size(500,500)
    }
    const startPoint = selections.languageAndRankData.location;
    const firstMarker = selections.languageAndRankData.markerLocations[0];


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={startPoint}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {true && (
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    position={firstMarker}
                    icon={{
                        path: window.google.maps.Circle, // Use a predefined shape or your own custom image
                    }}
                    onClick={() => alert('You clicked me!')}
                    animation={window.google.maps.Animation.BOUNCE}
                />
            )}
            <StreetViewPanorama
                position={startPoint}
                visible={true}
                onPositionChanged={handlePositionChange}
            />
        </GoogleMap>
    ) : <></>
}

GoogleStreet.propTypes = {
    sectionDescription: PropTypes.element,
}

export default GoogleStreet;