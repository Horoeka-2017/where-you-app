import React, { Component } from 'react'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: [
        {
          id: 1,
          question: 'Which region is the Philippines located?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        },
        {
          id: 2,
          question: 'What is the capital city of the Philippines?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        },
        {
          id: 3,
          question: 'What languages are spoken in the Philippines?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        },
        {
          id: 4,
          question: 'What currency is used in the Philippines?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        },
        {
          id: 5,
          question: 'What is the latitude and longitude for the Philippines?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        },
        {
          id: 6,
          question: 'What are the people of the Philippines also referenced as?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        },
        {
          id: 7,
          question: 'What is the sub-region in which the Philippines is located?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        },
        {
          id: 8,
          question: 'What is the calling code for the Philippines?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        },
        {
          id: 9,
          question: 'How does one say the Philippines in German?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        },
        {
          id: 10,
          question: 'What do they put on the end of their URL?',
          answers: [
            { qid: 'a', answer: 'Africa', checked: false, correct: false },
            { qid: 'b', answer: 'Africa', checked: false, correct: false },
            { qid: 'c', answer: 'Africa', checked: false, correct: false },
            { qid: 'd', answer: 'Africa', checked: false, correct: false }
          ]
        }
        // Dons Recommendation put Q's into a single JS final js file. retain hecked state.
      ]
    }
    this.toggleChange = this.toggleChange.bind(this)
  }

  toggleChange (questionId, answerId, newValue) {
    const newState = this.state.questions.map((question) => {
      if (question.id === questionId) {
        const newQVar = Object.assign({}, question)
        newQVar.answers = newQVar.answers.map((answer) => {
          if (answer.qid === answerId) {
            const newAnswer = Object.assign({}, answer)
            newAnswer.checked = newValue
            return newAnswer
          } else {
            return answer
          }
        })
        return newQVar
      } else {
        return question
      }
    })
    this.setState({
      questions: newState
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
                              checked={answer.checked}
                              onChange={(e) => {
                                this.toggleChange(singleQuestion.id, answer.qid, !answer.checked)
                              }}
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
