import React from 'react';

export default function DisplayRestaurants(props) {
    return (
        <div>
            <p>For now here is a single one off the list, the rest are console logged. <br />im going to bed now see you in the morning - {props.single}</p>
        </div>
    )
}