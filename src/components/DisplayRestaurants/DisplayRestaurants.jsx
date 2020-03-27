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

export default function DisplayRestaurants(props) {
    const classes = useStyles();

    return (
        <div>
            <p>For now here is a single one off the list, the rest are console logged. <br />im going to bed now see you in the morning - {props.single}</p>

            <Card className={classes.root}>
                <CardContent>
                    {props.single} <br />
                    {props.singleTwo} <br />
                    {props.singleThree}
                </CardContent>
            </Card>
        </div >
    )
}