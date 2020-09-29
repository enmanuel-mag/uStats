import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Slide,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: '#fff',
  },
}));

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.navBar}>
          <Toolbar>
            <Container maxWidth="lg">
              <Typography variant="h6" color="primary">
                uStats
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
