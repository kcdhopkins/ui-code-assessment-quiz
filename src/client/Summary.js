import React from "react";
import { useSelector } from 'react-redux';

const Summary = () => {
    
    const state = useSelector(state=>state);
  
    const correct = state.testState.numOfCorrectQuestions;
    const wrong = state.testState.numOfIncorrectQuestions;
    const totalQuestionsAnswered = wrong + correct;
    const finalScore = Math.round((correct / totalQuestionsAnswered) * 100);
    
    return (<div>
        <ul style={{paddingLeft: '0', listStyle: 'none'}}>
            <li>Correct: {correct}</li>
            <li>Wrong: {wrong}</li>
            <li>Questions answered: {totalQuestionsAnswered}</li>
            <li>Final Score: {!correct && !wrong ? 'No questions answered' : `${finalScore}%`}</li>
        </ul>
    </div>);
}

export default Summary;