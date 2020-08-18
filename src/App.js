import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core'

import './App.css';
import Cards from './containers/Cards/Cards'

function App() {
  return (
    <div className="App">

      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <section>
        <Cards />
      </section>

    </div>
  );
}

export default App;
