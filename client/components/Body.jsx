import React, { Component } from 'react'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: [
        {
          id: 1,
          question: 'Which region is the Philippines located?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        },
        {
          id: 2,
          question: 'What is the capital city of the Philippines?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        },
        {
          id: 3,
          question: 'What languages are spoken in the Philippines?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        },
        {
          id: 4,
          question: 'What currency is used in the Philippines?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        },
        {
          id: 5,
          question: 'What is the latitude and longitude for the Philippines?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        },
        {
          id: 6,
          question: 'What are the people of the Philippines also referenced as?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        },
        {
          id: 7,
          question: 'What is the sub-region in which the Philippines is located?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        },
        {
          id: 8,
          question: 'What is the calling code for the Philippines?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        },
        {
          id: 9,
          question: 'How does one say the Philippines in German?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        },
        {
          id: 10,
          question: 'What do they put on the end of their URL?',
          answers: [{ qid: 'a', answer: 'Africa' }, { qid: 'b', answer: 'Africa' }, { qid: 'c', answer: 'Africa' }, { qid: 'd', answer: 'Africa' }]
        }
      ],
      questionCheckState: [
        { a: false, b: false, c: false, d: false },
        { a: false, b: false, c: false, d: false },
        { a: false, b: false, c: false, d: false },
        { a: false, b: false, c: false, d: false },
        { a: false, b: false, c: false, d: false },
        { a: false, b: false, c: false, d: false },
        { a: false, b: false, c: false, d: false },
        { a: false, b: false, c: false, d: false },
        { a: false, b: false, c: false, d: false },
        { a: false, b: false, c: false, d: false }
      ]
    }
    this.toggleChange = this.toggleChange.bind(this)
  }
  toggleChange () {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render () {
    return (
      <div className='body'>
        <div className='questions-body'>
          <div>
            {this.state.questions.map((singleQuestion) => {
              return (
                <div key={singleQuestion.id} className='question'>
                  <h3>{singleQuestion.question}</h3>
                  <div className='answers'>
                    {singleQuestion.answers.map((answer) => {
                      return (
                        <div className='button-container' key={answer.qid}>
                          <label>
                            <input
                              type="checkbox"
                              checked={this.state.isChecked}
                              onChange={this.toggleChange}
                            />
                            {answer.answer}
                          </label>
                        </div>
                      )
                    })}
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
