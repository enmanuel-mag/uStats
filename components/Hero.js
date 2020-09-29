import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
    padding: '1.5rem',
    textAlign: 'center',
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h5">
        Obten información de tu Streaming de{' '}
        <Typography variant="h5" display={'inline'} color={'primary'}>
          Youtube
        </Typography>
      </Typography>
      <Typography>visualiza fácilmente temas frecuentes</Typography>
      <Typography>que escriben tus espectadores</Typography>
    </Container>
  );
};

export default Hero;
