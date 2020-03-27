import React from 'react';

let OpenWeatherDisplay = (props) => {
    let celsiusTemp = '';

    function convertToCelsius() {
        celsiusTemp = (props.temp - 32) * 5 / 9;
    }

    return (
        <div>
            <button onClick={convertToCelsius}>show me the temp in celsius</button>
            <p>{celsiusTemp}</p>
        </div>
    )
}

export default OpenWeatherDisplay;