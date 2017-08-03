import React, { Component } from 'react'

const Score = (props) => {
  return (
    <div>
      <div className='score-bar'>
        Your Curernt Score Is {props.Score}
      </div>
    </div>
  )
}

export default Score
