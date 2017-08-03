import React from 'react'

const Score = (props) => {
  return (
    <div>
      <div className='score-bar'>
        Your Current Score Is {props.Score}
      </div>
    </div>
  )
}

export default Score
