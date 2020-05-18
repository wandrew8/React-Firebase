import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardComponent(props) {
  const classes = useStyles();

  const { author, dateRead, name, pages, rating, review, synopsis } = props.book

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography className={classes.pos} color="textSecondary">
          {author}
        </Typography>
        <Typography variant="body2" component="p">
          {synopsis}
          <br />
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
}

CardComponent.propTypes = {
    book: PropTypes.object
}

