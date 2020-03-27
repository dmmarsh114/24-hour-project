import React from "react";
import DisplayCoords from './DisplayCoords';
import GetRestaurants from './GetRestaurants';

import NASA from './NASA/NASA';

export default class GetLocation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: '',
            lon: '',
            city: '',
            regionName: '', // State - example: Indiana?
        }
    }

    componentWillMount() {
        console.log('Hello there')
    }

    componentDidMount() {
        console.log('General Kanobi')


        fetch('http://ip-api.com/json')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    lat: json.lat,
                    lon: json.lon,
                    city: json.city,
                    regionName: json.regionName
                })
                console.log(this.state.lat);
                console.log(this.state.lon);
                console.log(this.state.city);
                console.log(this.state.regionName);
            })
    };

    render() {
        return (
            <div>
                <DisplayCoords lat={this.state.lat} lon={this.state.lon} city={this.state.city} state={this.state.regionName} />
                {this.state.lat !== '' && this.state.lon !== '' ? <NASA lat={this.state.lat} lon={this.state.lon} /> : null}
                {this.state.lat && this.state.lon ? <GetRestaurants lat={this.state.lat} lon={this.state.lon} /> : null}
                {/* <OpenWeatherDisplay lat={this.state.lat} lon={this.state.lon} /> */}
            </div>
        )
    }

}