import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        width: '250px',
        backgroundColor: 'lightgreen',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: '10px'
    }
})

const OpenWeatherDisplay = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <h3>Current Weather:</h3>
                <ul className={classes.list}>
                    <li>Weather: {props.weather}</li>
                    <li>Description: {props.description}</li>
                    <li>Temp in Imperial: {props.temp} &deg;F</li>
                    <li>Temp in Metric: {((props.temp - 32) * 5 / 9).toString()} &deg;C</li>
                </ul>
            </CardContent>
        </Card>
    )
}

export default OpenWeatherDisplay;