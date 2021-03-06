import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: 'auto',
  },
}));

const VideoPLayer = (props) => {
  const { urlVideo } = props;
  const classes = useStyles();

  return (
    <ReactPlayer
      className={classes.container}
      url={urlVideo}
      height="100%"
      width="auto"
    />
  );
};

export default VideoPLayer;
