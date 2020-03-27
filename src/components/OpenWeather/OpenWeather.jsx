import React from 'react';
import OpenWeatherDisplay from './OpenWeatherDisplay';

export default class Fetch extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            weather: '',
            description: '',
            temp: ''
        }
    }

    componentWillMount() {
        console.log("component will mount");
    };

    componentDidMount() {
        console.log("component mounted");

        // using "&=imperial" for Fahrenheit
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&units=imperial&appid=eb4d2ade0bb45cb0441c9d29ed41aa53`)
        // using "&=metric" for Celsius

        .then(response => response.json())
        .then(json => {
        console.log(json);
        this.setState({
            weather: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp
        });
        console.log(this.state.weather);

    })
};


    render() {
        return (
            <div>
                <OpenWeatherDisplay temp={this.state.temp} />
            </div>
        )
    }
}
