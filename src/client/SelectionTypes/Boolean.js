import React from "react";
import { useSelector} from 'react-redux';

const Boolean = () =>{

    const questionInfo = useSelector( state => state);
    if(document.querySelectorAll('input[type="radio"]')){
        const inputs = document.querySelectorAll('input[type="radio"]');
        inputs.forEach( input => input.checked = false);
    }
    
    let questions = [...questionInfo.incorrectAnswers, questionInfo.correctAnswer];
    
    const radioButtons = questions.map( (selection, index) => {
        return(
            <div key={index} style={{display: 'flex', flexDirection: 'row'}}>
                <input type="radio" name="selections" value={selection} alt={questions.questiontype} />
                <label htmlFor={questions.category}>{selection}</label>
            </div>
        );
    });

    return(<div>{radioButtons}</div>);
}

export default Boolean;