import React, { Component } from 'react'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: [

        {
          id: 1,
          question: 'Which region is the Philippines located?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        },
        {
          id: 2,
          question: 'What is the capital city of the Philippines?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        },
        {
          id: 3,
          question: 'What languages are spoken in the Philippines?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        },
        {
          id: 4,
          question: 'What currency is used in the Philippines?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        },
        {
          id: 5,
          question: 'What is the latitude and longitude for the Philippines?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        },
        {
          id: 6,
          question: 'What are the people of the Philippines also referenced as?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        },
        {
          id: 7,
          question: 'What is the sub-region in which the Philippines is located?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        },
        {
          id: 8,
          question: 'What is the calling code for the Philippines?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        },
        {
          id: 9,
          question: 'How does one say the Philippines in German?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        },
        {
          id: 10,
          question: 'What do they put on the end of their URL?',
          answers: [{ qid: '1', answer: 'Africa' }, { qid: '2', answer: 'Africa' }, { qid: '3', answer: 'Africa' }, { qid: '4', answer: 'Africa' }]
        }]
    }
  }

  render () {
    return (
      <div className='body'>
        <div className='questions-body'>
          <div>
            {this.state.questions.map((singleQuestion) => {
              return (
                <div key={singleQuestion.id} className='question'>{singleQuestion.question}

                  <div className='answers'>
                    {singleQuestion.answers.map((answer) => { return <div key={answer.qid} className='answer'>{answer.answer}</div> })}
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Body
