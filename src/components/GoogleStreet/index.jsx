import React, {useEffect, useRef, useState} from 'react';
import { GoogleMap, StreetViewPanorama, LoadScript, useJsApiLoader} from "@react-google-maps/api";

const containerStyle = {
    width: '50vw',
    height: '100vh'
};

const center = {
    lat: 42.345573,
    lng: -71.098326
};

const GoogleStreet = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDPbgEOXEYQk0xG5xi5cfTyejQIxlKd1bw'
    });

    const [map, setMap] = useState(null);
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, []);
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    const handlePositionChange = () => {
        const panorama = map.getStreetView();
        const position = panorama.getPosition();
        console.log(`New Position - Latitude: ${position.lat()}, Longitude: ${position.lng()}`);
    };


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <StreetViewPanorama
                position={center}
                visible={true}
                onPositionChanged={()=>{
                    console.log(`new position: ${(map.getStreetView().getPov().pitch)}`)
                }}
                onPovChanged={()=>{
                    console.log(`new pov: ${(map.getStreetView().getPov().heading)}`)

                }}
            />
        </GoogleMap>
    ) : <></>
}

export default GoogleStreet;