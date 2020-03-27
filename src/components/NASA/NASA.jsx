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
        fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${this.props.long}&lat=${this.props.lat}&api_key=ZDJJHnQ2ZteVFqHiik49vTYcQQCRNPpASMyeK7vB`)
            .then(respsonse => respsonse.json())
            .then(json => {
                console.log(json);
                this.setState({ img: json.url });
            })
    }

    render() {
        return (
            <div>
                <NASADisplay url={this.state.img} />
            </div>
        )
    }
}

export default NASA;