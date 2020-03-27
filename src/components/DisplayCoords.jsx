import React from 'react';

export default function DisplayCoords(props) {
    return (
        <div>
            <p>Latitude: {props.lat}</p>
            <p>Longitude: {props.lon}</p>
        </div>
    )
}