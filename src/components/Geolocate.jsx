import React from "react";
import { geolocated } from "react-geolocated";

import DisplayCoords from './DisplayCoords';
import NASA from './NASA/NASA';

class Geolocate extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div>
                <DisplayCoords lat={this.props.coords.latitude} long={this.props.coords.longitude} />
                <NASA lat={this.props.coords.latitude} long={this.props.coords.longitude} />
            </div>
        ) : (
                        <div>Getting the location data&hellip; </div>
                    );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geolocate);