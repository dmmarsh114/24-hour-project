import React from 'react';
import NASADisplay from './NASADisplay';

class NASA extends React.Component {

    componentDidMount() {
        fetch('')
    }

    render() {
        return (
            <div>
                <NASADisplay />
            </div>
        )
    }
}

export default NASA;