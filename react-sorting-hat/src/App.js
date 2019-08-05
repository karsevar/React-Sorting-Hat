import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import QuestionForm from './components/QuestionForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      quizData: [
        {
          question: 'Which of the following would you most hate people to call you?',
          answers: [
            'Ordinary', 
            'Ignorant', 
            'Cowardly', 
            'Selfish'
          ]
        },
        {
          question: 'After you have died, what would you most like people to do when they hear your name?',
          answers: [
            'Miss you, but smile', 
            'Ask for more stories about your adventures', 
            'Think with admiration of your achievements',
            'I don\'t care what people think of me after I\'m dead it\'s what they think of me when alive that counts'
          ]
        },
        {
          question: 'Given the choice, would you rather invent a potion that would guarantee you:',
          answers: [
            'Glory', 
            'Wisdom', 
            'Love', 
            'Power'
          ]
        },
        {
          question: 'How would you like to be known to history?',
          answers: [
            'The Wise', 
            'The Good', 
            'The Bold', 
            'The Great'
          ]
        },
        {
          question: 'You enter an enchanted garden. What would you be most curious to examine first?',
          answers: [
            'The silver leafed tree bearing golden apples', 
            'The fat red toadstools that appear to be talking to each other', 
            'The bubbling pool, in the depths of which something luminous', 
            'The statue of an old wizard with strangely twinkling eye'
          ]
        },
        {
          question: 'What kind of instrument most pleases your ear?',
          answers: [
            'Violin',
            'Drums',
            'Piano',
            'Trumpet'
          ]
        }
      ]
    };


  }
  render() {
    {
      this.state.quizData.forEach(quiz => {
        console.log(quiz.question);
      })
    }
    return (
      <div className="App">
        <form className='quiz-form'>
          <ol>
          {
            this.state.quizData.map((item, index) => {
              return (
                <QuestionForm 
                  question={item.question} 
                  answers={item.answers} 
                  key={index} 
                  />
              )
            })
          }
          </ol>
        </form>
      </div>
    );
  }
}

export default App;
