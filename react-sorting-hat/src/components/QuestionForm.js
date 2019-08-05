import React from 'react';

const QuestionForm = props => {
    console.log(props.answers);
    return (
        <div className='question-container'>
            <strong>{props.question}</strong>
            <ul>
                <li>
                    {props.answers.map(answer => {
                        return (
                            <label>
                                <input type='radio' value='idea' />
                                {answer} 
                            </label>
                        )
                    })}
                </li>
            </ul>
        </div>
    )
}

export default QuestionForm;