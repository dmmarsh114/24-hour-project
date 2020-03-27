import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        width: '250px',
        backgroundColor: 'lightblue',
        textAlign: 'center',
    }
})

export default function DisplayCoords(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <h4>{props.city}, {props.state}</h4>
                <p>Latitude: {props.lat}</p>
                <p>Longitude: {props.lon}</p>
            </CardContent>
        </Card>
    )
}