import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Navbar from '../component/header/Navbar';
import TabsAndContent from '../component/tabs/TabsAndContent';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mainContents: {}
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: '#11cb5f' },
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <ThemeProvider theme={theme}>
          <Navbar />
          <Grid item xs={12} classes={classes.mainContents}>
            <Grid container spacing={3} >
              <Grid item xs={1} />
              <Grid item xs={10}>
                <TabsAndContent />
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
      </ThemeProvider>    
      </Grid>
    </div>
  );
}

export default App;
