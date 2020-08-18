import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    cursor: "pointer",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    '&:hover' : {
      backgroundColor: "#eee"
    }
  },
}));

const Card = props => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={4} md={2} onClick={props.clicked}>
      <Paper className={classes.paper}>
        <Typography variant="h1" component="h2">{props.num}</Typography>
      </Paper>
    </Grid>
  )
}

export default Card