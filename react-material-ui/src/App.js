import React from 'react';
import GridItem from './components/GridItem';
import NavBar from './components/NavBar';
import './App.css';
import { Grid, Typography, Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import baseTheme from './theme/base';

const length = 2;

function App() {
  return (
    <div>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline/>
        <NavBar></NavBar>
        <Grid justify="space-around" alignItems="center" container spacing={3}>
          <GridItem 
          length={length}
          title="This is the title"
          elevation={false}/>
          <GridItem 
          length={length}
          title="This is the title"
          elevation={false}/>
          <GridItem 
          length={length}
          title="This is the title"
          elevation={false}/>
          <GridItem 
          length={length}
          title="This is the title"
          elevation={false}/>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
