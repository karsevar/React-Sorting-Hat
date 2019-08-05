import React from 'react';

const QuestionForm = props => {
    return (
        <div className='question-container'>
            <strong>{props.question}</strong>
            <ul>
                <li>
                    {props.answers.map(answer => {
                        <label>
                            <input type='radio' value='idea' />
                            {answer} 
                        </label>
                    })}
                </li>
            </ul>
        </div>
    )
}