import React from 'react';
import { useSelector} from 'react-redux';

const Multiple = () => {
    
    const questionInfo = useSelector( state => state);
    
    if(document.querySelectorAll('input[type="radio"]')){
        const inputs = document.querySelectorAll('input[type="radio"]');
        inputs.forEach( input => input.checked = false);
    }
    
  
    const questions = [...questionInfo.incorrectAnswers, questionInfo.correctAnswer];
    const radioButtons = questions.map( (selection, index) => {
        return(
            <div key={index} id="radioContent" style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <input type="radio" name="selections" value={selection} alt={questionInfo.questiontype}/>
                    <label htmlFor={questionInfo.category}>{selection}</label>
                </div>
            </div>
        );
    });

    return(<div>{radioButtons}</div>);
}

export default Multiple;