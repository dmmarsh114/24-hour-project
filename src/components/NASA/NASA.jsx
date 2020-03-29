import React from 'react';
import NASADisplay from './NASADisplay';

class NASA extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            img: '',
        }
    }

    componentDidMount() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://api.nasa.gov/planetary/earth/imagery?';
        const key = 'ZDJJHnQ2ZteVFqHiik49vTYcQQCRNPpASMyeK7vB';

        fetch(`${proxyUrl}${url}lon=${this.props.lon}&lat=${this.props.lat}&api_key=${key}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost3000'
            })
        })
            .then(respsonse => respsonse.json())
            .then(json => {
                console.log(json);
                this.setState({ img: json.url });
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.img === '' ?
                        null
                        : <NASADisplay url={this.state.img}
                        />
                }
            </div>
        )
    }
}

export default NASA;