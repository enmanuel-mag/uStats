import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPLayer from '../components/VideoPLayer';
import InfoStream from '../components/InfoStream';
import Analitics from '../components/Analitics';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '.5rem',
  },
  mainCont: {
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '15px',
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

  const topics = [
    {
      main: 'Las RX 6000 competirán con las RTX 3000?',
      relation: [],
    },
    {
      main: 'Los nuevos Ryzen 5000 mejorarán sus latencias?',
      relation: [],
    },
    {
      main: 'Las RX 6000 competirán con las RTX 3000?',
      relation: [],
    },
    {
      main: 'Las RX 6000 competirán con las RTX 3000?',
      relation: [],
    },
    {
      main: 'Los nuevos Ryzen 5000 mejorarán sus latencias?',
      relation: [],
    },
    {
      main: 'Las RX 6000 competirán con las RTX 3000?',
      relation: [],
    },
  ];
  return (
    <div>
      <Layout>
        <div className={classes.mainCont}>
          <Grid
            className={classes.container}
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            id="holi"
          >
            <Grid item xs={5}>
              <VideoPLayer urlVideo={urlVideo} />
            </Grid>
            <Grid item xs={7}>
              <InfoStream infoStream={infoStream} />
            </Grid>
            <Grid item container xs={5}>
              <Grid item xs={12}>
                <Analitics topics={topics} />
              </Grid>
              <Grid item xs={12}>
                Nube de palabras
              </Grid>
            </Grid>
            <Grid item xs={7}>
              Burbujas
            </Grid>
          </Grid>
        </div>
      </Layout>
    </div>
  );
};

export default statistics;
