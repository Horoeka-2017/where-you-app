import React, { Component } from 'react'

class Score extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerScore: 0,
      apiData: {}
    }
  }

  render() {
    return (
      <div className='score-bar'>
      </div>
    )
  }
}

export default Score
