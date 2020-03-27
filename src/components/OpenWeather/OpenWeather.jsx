import React from 'react';
import OpenWeatherDisplay from './OpenWeatherDisplay';

export default class Fetch extends React.Component {
    // constructor (props){
    //     super(props)

    // }

    componentWillMount () {
        console.log("component will mount");
    };

    componentDidMount (){
        console.log("component mounted");

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&units=imperial&appid=eb4d2ade0bb45cb0441c9d29ed41aa53`)

        // fetch('api.openweathermap.org/data/2.5/weather?lat=35&lon=139=eb4d2ade0bb45cb0441c9d29ed41aa53')
        .then(response => response.json())
        .then(json => {
        console.log(json);
    })
};


    render(){
        return(
            <div>
                {/* <OpenWeatherDisplay /> */}
            </div>
        )
    }
}
