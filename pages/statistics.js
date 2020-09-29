import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPLayer from '../components/VideoPLayer';
import InfoStream from '../components/InfoStream';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1.5rem',
  },
}));

const statistics = () => {
  const classes = useStyles();
  const urlVideo = 'https://www.youtube.com/watch?v=C-o8pTi6vd8';
  const infoStream = {
    title: 'EXTREMO y TARDE TRANQUILA - 12 HORAS!',
    likes: 2900,
    spects: 12500,
    duration: Date.now(),
  };
  return (
    <div>
      <Layout>
        <Grid
          className={classes.container}
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={5}>
            <VideoPLayer urlVideo={urlVideo} />
          </Grid>
          <Grid item xs={7}>
            <InfoStream infoStream={infoStream} />
          </Grid>
          <Grid item container xs={5}>
            <Grid item xs={12}>
              Analisis
            </Grid>
            <Grid item xs={12}>
              Nube de palabras
            </Grid>
          </Grid>
          <Grid item xs={7}>
            Burbujas
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default statistics;
