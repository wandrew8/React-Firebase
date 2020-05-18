import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "4rem"
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function GridComponent(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {props.children}
        </Grid>
      </Grid>
    </Grid>
  );
}