import React from 'react';

let style = {
    height: '400px',
    width: 'auto',
    borderRadius: '50%',
}

const NASADisplay = (props) => {
    return (
        <div>
            <img src={props.url} alt="cool NASA image" style={style} />
        </div>
    )
}

export default NASADisplay;