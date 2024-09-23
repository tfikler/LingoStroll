import React, { useState } from 'react';

export const Loading = () => {

    return (
        <div>
                <div id="loadingModal"
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
                     }}>
                    Loading...
                </div>
        </div>
    );
};
