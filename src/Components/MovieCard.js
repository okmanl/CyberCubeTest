import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 400,
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
};

function MovieCard(props) {
  const { classes, title, displayCharacters } = props; 

  return (
    <Card className={classes.card}>
      <CardContent> 
        <Typography variant="h5" component="h2"> 
            {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <button onClick={displayCharacters }> Characters </button>
        </Typography> 
      </CardContent> 
    </Card>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);