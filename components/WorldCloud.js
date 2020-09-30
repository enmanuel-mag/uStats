import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, ListItem, Paper, Typography } from '@material-ui/core';

const useStyleList = makeStyles((theme) => ({
  root: {
    color: '#36313d',
    font:
      "100%/1.5 -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
    fontKerning: 'normal',
    fontFeatureSettings: '"kern", "liga", "clig", "calt"',
    fontSize: 16,
    minHeight: 45,
    lineHeight: '15px',
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
  wordCloud: {
    paddingBottom: '25px',
  },
  paper: {
    height: '100%',
    boxShadow:
      '0 15px 35px 0 rgba(18,37,49,.1),0 5px 15px 0 rgba(0,0,0,.05)!important',
  },
  words: {
    textTransform: 'capitalize',
  },
}));

const WorldCloud = ({ words }) => {
  const classes = useStyles();
  const classesList = useStyleList();

  return (
    <Paper className={classes.paper}>
      <Container className={classes.container}>
        <Typography variant="h5" className={classes.wordCloud}>
          <b>Palabras mas frecuentes</b>
        </Typography>
        {words.map((word, index) => (
          <ListItem key={index} classes={classesList}>
            <Typography variant="h6" className={classes.words}>
              {index + 1}- {word.text} ({word.value})
            </Typography>
          </ListItem>
        ))}
      </Container>
    </Paper>
  );
};

export default WorldCloud;
