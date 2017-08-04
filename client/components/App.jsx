import React, { Component } from 'react'

import Header from './Header'
import Body from './Body'
import Score from './Score'

import getRandomCountryData from '../Api.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerScore: 0,
      apiData: {
        'name': 'Philippines',
        'currency': 'PHP',
        'callingcode': '63',
        'capital': 'Manila',
        'region': 'Asia',
        'subregion': 'South-Eastern,Asia',
        'altSpellings': 'PH,Pilipinas',
        'relevance': '1.5',
        'nationality': 'Filipino',
        'latlng': [
          13,
          122
        ],
        'languages': [
          'tl',
          'en'
        ],
        'translations': {
          'de': 'Philippinen',
          'en': 'Philippines',
          'es': 'Filipinas',
          'fr': 'Philippines'
        },
        'topLevelDomain': '.ph',
        'alpha2Code': 'PH',
        'alpha3Code': 'PHL',
        'isoNumericCode': '608'
      }
    }
  }

  getRandomCountryData(err, apiData) {
    if (!err) {
      this.setState({ 'question': apiData.value })
    } else (console.log('data not recieved'))
  }

  render() {
    return (
      <div className='content'>
        <h1>Where You App?!</h1>
        <Body country={this.state.apiData} />
        <Score score={this.state.playerScore} />
      </div>
    )
  }
}

export default App
