import {
  Container,
  Grid,
  ListItem,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2rem',
    height: '100%',
    width: '100%',
  },
  maxSize: {
    height: '100%',
    width: '100%',
  },
  paper: {
    height: '100%',
    boxShadow:
      '0 15px 35px 0 rgba(18,37,49,.1),0 5px 15px 0 rgba(0,0,0,.05)!important',
  },
}));

const useStyleList = makeStyles((theme) => ({
  root: {
    color: '#36313d',
    font:
      "100%/1.5 -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
    fontKerning: 'normal',
    fontFeatureSettings: '"kern", "liga", "clig", "calt"',
    fontSize: 16,
    minHeight: 45,
    lineHeight: '21px',
    margin: 0,
    padding: '12px 48px 12px 1.5rem',
    '&:before, &:after': {
      content: '" "',
      top: '1.3em',
      height: 8,
      position: 'absolute',
      transition: 'all 250ms cubic-bezier(0.4,0,0.2,1)',
    },
    '&:before': {
      left: '0.5rem',
      width: 8,
      borderRadius: '100%',
    },
    '&:after': {
      left: 0,
      top: '1.3em',
      height: 8,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      transform: 'translateX(-100%)',
    },
    '&:hover, &:focus': {
      background: 'rgba(255,165,165,0.275)',
      color: '#d32f2f',
      '&:before': {
        background: '#d32f2f',
        transform: 'scale(1)',
      },
    },
  },
  selected: {
    '&.Mui-selected': {
      color: 'rgb(138, 75, 175)',
      background: 'initial',
      fontWeight: 500,
      '&:hover, &:focus': {
        background: 'rgba(241,222,250,0.275)',
        color: '#663399',
        '&:before': {
          background: '#8a4baf',
          transform: 'scale(1)',
        },
      },
      '&:after': {
        width: 'calc(0.5rem + 8px)',
        background: 'rgb(138, 75, 175)',
        transform: 'translateX(0)',
      },
    },
  },
}));

const Analitics = (props) => {
  const { topics } = props;
  const classes = useStyles();
  const classesList = useStyleList();
  return (
    <Paper className={classes.paper}>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h5">
              <b>Análisis de tu Stream</b>
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography variant="h6">Temas frecuentes:</Typography>
            </Grid>
            <Grid item xs={12}>
              {topics.map((topic, index) => (
                <ListItem key={index} classes={classesList}>
                  {index + 1}- {topic.main}
                </ListItem>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Analitics;
