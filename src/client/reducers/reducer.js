import * as helpers from "./helpers.js";


const reducer = (state, action)=>{
    if(!state){
        return {
            data: null,
            questionsList : null,
            question: null,
            incorrectAnswers: null,
            correctAnswer: null,
            category: null,
            retake:null,
            testOver:null,
            testState:{
                numOfCorrectQuestions: null,
                numOfIncorrectQuestions: null
            }
        }
    }

    switch(action.type){
        case 'getApiData':
                fetch(action.apiEndPoint)
                    .then( data => data.json())
                        .then( data => action.dispatch({type: 'setApiData', data: data}))
                            .catch( err => console.log(err));
            return state;
        case 'setApiData':
            const formattedAPIData = helpers.formatApiData(state.data ? state.data.results : action.data.results);
            const randomQuestion = Math.floor(Math.random() * formattedAPIData.length);
            const currentQuestion = formattedAPIData.splice(randomQuestion, 1);
            
            return {
                ...state,
                data: state.data ? state.data : action.data,
                questionsList: formattedAPIData,
                questiontype: currentQuestion[0].type, 
                question: currentQuestion[0].question,
                incorrectAnswers: currentQuestion[0].incorrect_answers,
                correctAnswer: currentQuestion[0].correct_answer,
                category: currentQuestion[0].category,
                testState:{
                    numOfCorrectQuestions: 0,
                    numOfIncorrectQuestions: 0
                }
            }
        case 'setData':
            let arr = [...state.questionsList];
            if(arr.length){
                let arr = [...state.questionsList];

                const randomQuestion = Math.floor(Math.random() * arr.length);
                const currentQuestion = arr.splice(randomQuestion, 1);

                return{
                    ...state,
                    data: state.data,
                    questionsList: arr,
                    questiontype: currentQuestion[0].type, 
                    question: currentQuestion[0].question,
                    incorrectAnswers: currentQuestion[0].incorrect_answers,
                    correctAnswer: currentQuestion[0].correct_answer,
                    category: currentQuestion[0].category
                };
            } else {
                return{
                    ...state,
                    question: "SUMMARY",
                    testOver: true
                }
            }
        case 'retake': 
            return{
                ...state,
                questionsList : null,
                question: null,
                incorrectAnswers: null,
                correctAnswer: null,
                category: null,
                retake:null,
                testOver:null,
                testState:{
                    numOfCorrectQuestions: 0,
                    numOfIncorrectQuestions: 0
                }
            }
        case 'submit':
            const buttonType = document.querySelector("input[type='submit']");
        
            switch(buttonType.alt){
                case 'multiple':
                    let elements = document.querySelectorAll("input[type='radio']");
                   
                    elements.forEach( element => {
                        if(element.checked === true){
                            if(state.correctAnswer === element.value){
                                state.testState.numOfCorrectQuestions++;
                            } else {
                                state.testState.numOfIncorrectQuestions++;
                            }
                        } 
                    });
                    return state;
                    
                case 'boolean':
                    let buttons = document.querySelectorAll("input[type='radio']");
                   
                    buttons.forEach( element => {
                        if(element.checked === true){
                            if(state.correctAnswer === element.value){
                                state.testState.numOfCorrectQuestions++;
                            } else {
                                state.testState.numOfIncorrectQuestions++;
                            }
                        } 
                    });
                    return state;
                case 'text':
                    let text = document.getElementById('text').value;
                    if(text){
                        if(state.correctAnswer.toUpperCase() === text.toUpperCase()){
                            return{
                                ...state,
                                testState:{
                                    ...state.testState,
                                    numOfCorrectQuestions: state.testState.numOfCorrectQuestions + 1
                                }
                            };
                        } else {
                            return{
                                ...state,
                                testState:{
                                    ...state.testState,
                                    numOfIncorrectQuestions: state.testState.numOfIncorrectQuestions + 1
                                }
                            };
                        }
                    }
            }
        default:
            return state;
    }
}

export default reducer;