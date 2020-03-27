import React from 'react';
import OpenWeatherDisplay from './OpenWeatherDisplay';

export default class Fetch extends React.Component {
    constructor(props) {
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
                console.log('WEATHER', json);
                this.setState({
                    weather: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
                console.log('CURRENT WEATHER', this.state.weather);
                console.log('CURRENT', this.state.description);
                console.log('CURRENT', this.state.temp);
            })
    };


    render() {
        return (
            <div>
                <OpenWeatherDisplay weather={this.state.weather} description={this.state.description} temp={this.state.temp} />
            </div>
        )
    }
}
