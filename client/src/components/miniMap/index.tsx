import React, {useEffect} from "react";
import {GoogleMap, StreetViewPanorama, LoadScript, useJsApiLoader, Marker} from "@react-google-maps/api";

export const MiniMap = (streetViewComponent, startPoint) => {

    return (
        <div>
            <LoadScript googleMapsApiKey={'AIzaSyD7E5UW63KqurNOmwYqGWIRLMCWzRGtM7U'}>
                <GoogleMap
                    // zoom={16}
                    // streetView={streetViewComponent}
                    // onLoad={(map) =>  map.setStreetView(streetViewComponent)}
                    // center={startPoint}
                    mapContainerStyle={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        width: '300px',
                        height: '300px',
                        border: '2px solid black',
                        zIndex: 1
                    }}
                >
                    <StreetViewPanorama
                        position={{
                            lat: 0,
                            lng: 0
                        }}
                        visible={true}
                        options={{
                            enableCloseButton: false,
                            showRoadLabels: false,
                            fullscreenControl: false,
                            motionTracking: false,
                            motionTrackingControl: false,
                            motionTrackingControlOptions: {
                                position: 0
                            }
                        }}
                    >
                        {streetViewComponent}
                    </StreetViewPanorama>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};