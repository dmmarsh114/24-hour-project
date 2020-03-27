import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        width: '250px',
        backgroundColor: 'pink',
        textAlign: 'center',
    }
})

export default function DisplayRestaurants(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <h3>Nearby Restaurants:</h3>
                    {props.single} <br />
                    {props.singleTwo} <br />
                    {props.singleThree}
                </CardContent>
            </Card>
        </div >
    )
}