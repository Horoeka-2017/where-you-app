import React, { Component } from 'react'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: [

        {
          id: 1,
          question: 'Which region is the Philippines located?',
          answers: [{ qid: '1', answer: '' }, { qid: '2', answer: '' }, { qid: '3', answer: '' }, { qid: '4', answer: '' }]
        },

        {
          id: 2,
          question: 'What is the capital city of the Philippines?',
          answers:
          {
            id: '', answer1: '', answer2: '', answer3: ''
          }
        },

        {
          id: 3,
          question: 'What languages are spoken in the Philippines?',
          answers:
          {
            id: '', answer1: '', answer2: '', answer3: ''
          }
        },

        {
          id: 4,
          question: 'What currency is used in the Philippines?',
          answers:
          {
            id: '', answer1: '', answer2: '', answer3: ''
          }
        },

        {
          id: 5,
          question: 'What is the latitude and longitude for the Philippines?',
          answers:
          {
            id: '', answer1: '', answer2: '', answer3: ''
          }
        },

        {
          id: 6,
          question: 'What are the people of the Philippines also referenced as?',
          answers:
          {
            id: '', answer1: '', answer2: '', answer3: ''
          }
        },

        {
          id: 7,
          question: 'What is the sub-region in which the Philippines is located?',
          answers:
          {
            id: '', answer1: '', answer2: '', answer3: ''
          }
        },

        {
          id: 8,
          question: 'What is the calling code for the Philippines?',
          answers:
          {
            id: '', answer1: '', answer2: '', answer3: ''
          }
        },

        {
          id: 9,
          question: 'How does one say the Philippines in German?',
          answers:
          {
            id: '', answer1: '', answer2: '', answer3: ''
          }
        },

        {
          id: 10,
          question: 'What do they put on the end of their URL?',
          answers:
          {
            id: '', answer1: '', answer2: '', answer3: ''
          }
        }]
    }
  }

  render () {
    return (
      <div className='body'>
        <div className='questions-body'>
          <p>{this.props.questions.map((question) => {
            return question
          })}</p>
        </div>

      </div>
    )
  }
}

export default Body
