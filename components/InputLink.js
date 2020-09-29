import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '3.5rem',
    textAlign: 'center',
  },
}));

const InputLink = () => {
  const classes = useStyles();
  const router = useRouter();

  const startAnalitics = () => {
    console.log('Empezando validación');
    router.push('/statistics');
  };

  return (
    <Paper>
      <Container className={classes.container} maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          spacing={6}
        >
          <Grid item xs={12} container>
            <TextField
              id="filled-basic"
              label="Link de su Streaming"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={startAnalitics}
            >
              Empezar
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography display={'inline'}>
              Por favor enviar un correo{' '}
              <Typography display={'inline'} color={'primary'}>
                ustats@support.com
              </Typography>
              <Typography>si algún problema aparece</Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default InputLink;
