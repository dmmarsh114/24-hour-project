import React from "react";
import DisplayCoords from './DisplayCoords';
import GetRestaurants from './Restaurants/GetRestaurants';
import OpenWeather from './OpenWeather/OpenWeather'
import NASA from './NASA/NASA';

let style = {
    display: 'flex',
    justifyContent: 'center'
}

export default class GetLocation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: '',
            lon: '',
            city: '',
            regionName: '',
        }
    }

    componentDidMount() {

        fetch('http://ip-api.com/json')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    lat: json.lat,
                    lon: json.lon,
                    city: json.city,
                    regionName: json.regionName
                })
            })
    };

    render() {
        return (
            <div>
                {
                    this.state.lat !== '' && this.state.lon !== '' ?
                        <div style={style}>
                            <DisplayCoords lat={this.state.lat} lon={this.state.lon} city={this.state.city} state={this.state.regionName} />
                            <OpenWeather lat={this.state.lat} lon={this.state.lon} />
                            <GetRestaurants lat={this.state.lat} lon={this.state.lon} />
                            <NASA lat={this.state.lat} lon={this.state.lon} />
                        </div>
                        : <h5>Could not find your location, sorry</h5>
                }
            </div>
        )
    }

}