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

    componentDidMount() {

        // using "&=imperial" for Fahrenheit
        // using "&=metric" for Celsius
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.lon}&units=imperial&appid=eb4d2ade0bb45cb0441c9d29ed41aa53`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    weather: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
    };


    render() {
        return (
            <div>
                <OpenWeatherDisplay
                    weather={this.state.weather}
                    description={this.state.description}
                    temp={this.state.temp}
                />
            </div>
        )
    }
}
