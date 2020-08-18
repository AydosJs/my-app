import React, { useState } from 'react';
import { Grid, Container } from '@material-ui/core';

import Card from '../../components/Card/Card'

function Cards() {

  const [state, setState] = useState([1, 2, 3, 4, 5])

  function HandleEvent() {
    const lastNum = state.pop();

    setState(() => {
      return [lastNum, ...state]
    })
  }

  let card = <div>Loading...!</div>

  if(state){
    card = state.map(num => {
      return (<Card
        key={num}
        num={num}
        clicked={HandleEvent} />)
    })
  }

  return (
    <Container >
      <Grid
        spacing={2}
        container
        direction="row"
        justify="center"
        alignItems="center" >

        {card}

      </Grid>
    </Container>
  )

}

export default Cards;