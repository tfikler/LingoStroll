import React, {useContext, useEffect, useRef, useState} from 'react';
import {GoogleMap, StreetViewPanorama, LoadScript, useJsApiLoader, Marker} from "@react-google-maps/api";
import {SelectionContext} from "../Context";
import PropTypes from "prop-types";
const containerStyle = {
    height: '100%',
    width: '100%'
};

const center = {
    lat: 42.345573,
    lng: -71.098326
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
        if (position.lat() >= 42.3461 && position.lat() <= 42.3462 &&
            position.lng() <= -71.0985 && position.lng() >= -71.0989) {
            console.log('returning true')
            console.log(`current pos: ${position.lat()} - ${position.lng()}`)
            return true;
        }
        console.log(`Marker not visible at lat: ${position.lat()} and lng: ${position.lng()}. Expected between lat: 42.346 to 42.3462 and lng: -71.0986 to -71.0987`);
        return false;
    }

    const handlePositionChange = () => {
        const visible = checkIfMarkerVisible();
        setMarkerVisible(visible);
        console.log(`Marker visibility updated to: ${visible}`);
    };

    const cafeIcon = {
        url: "https://clipart-library.com/2023/small-person-icon-17.jpg",
        scaledSize: new window.google.maps.Size(500,500)
    }
    const startPoint = selections.languageAndRankData.location;


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={startPoint}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {markerVisible && (
                <Marker
                    position={{ lat: 42.34611592823, lng: -71.0995320138475 }}
                    icon={cafeIcon}
                    onClick={() => alert('You clicked me!')}
                    animation={window.google.maps.Animation.BOUNCE}
                />
            )}
            <StreetViewPanorama
                position={center}
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