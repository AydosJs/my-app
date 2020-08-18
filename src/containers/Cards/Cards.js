import React, { Component } from 'react';
import { Grid, Container } from '@material-ui/core';

import Card from '../../components/Card/Card'

class Cards extends Component {
  state = {
    nums: [1, 2, 3, 4, 5]
  }

   HandleEvent = () => {
     const oldData = [...this.state.nums];
     const lastNum = oldData.splice(-1, 1);

     const newData = [...lastNum, ...oldData]
     this.setState({nums: newData})
  }
  
  
  render() {

    let card = this.state.nums.map(num => {
      return (<Card
        key={num}
        num={num}
        clicked={this.HandleEvent} />)
    })

    return (
      <Container maxWidth="sm">
      <Grid
        spacing={2}
        container
        direction="row"
        justify="flex-start"
        alignItems="center" >
        {card}
      </Grid>
      </Container>
    )
  }
}

export default Cards;