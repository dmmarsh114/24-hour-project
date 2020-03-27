import React from 'react';
import OpenWeatherDisplay from './OpenWeatherDisplay';

export default class Fetch extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            lat: '',
            lon: ''
        }
    }

    componentWillMount () {
        console.log("component will mount");
    };

    componentDidMount (){
        console.log("component mounted");

        // fetch(`http://api.openweathermap.org/data/2.5/find?lat=${this.state.lat}&lon=${this.state.lon}&cnt=10=eb4d2ade0bb45cb0441c9d29ed41aa53`)

        fetch('api.openweathermap.org/data/2.5/weather?lat=35&lon=139=eb4d2ade0bb45cb0441c9d29ed41aa53')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
            lat: json.lat,
            lon: json.lon
        })
        console.log(this.state.lat);
        console.log(this.state.lon);
    })
};


    render(){
        return(
            <div>
                <OpenWeatherDisplay />
            </div>
        )
    }
}
