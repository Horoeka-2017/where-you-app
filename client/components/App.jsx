import React, { Component } from 'react'

import Header from './Header'
import Body from './Body'
import Score from './Score'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      playerScore: 0,
      apiData: {}
    }
  }

  render () {
    return (
      <div>
        <Header />
        <Body />
        <Score />
      </div>
    )
  }
}

export default App
