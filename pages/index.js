import { Container, Grid, Paper } from '@material-ui/core';
import Head from 'next/head';

import Hero from '../components/Hero';
import InputLink from '../components/InputLink';
import Info from '../components/Info';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <Hero />
            </Grid>
            <Grid item xs={12}>
              <InputLink />
            </Grid>
            <Grid item xs={12}>
              <Info />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  );
}
