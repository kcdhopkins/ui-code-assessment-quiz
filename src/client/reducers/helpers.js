
export const formatApiData = apiData => {

    let arr = [...apiData];

    const formatedQuestionObj = apiData.map( obj => {
        let newObj = {};

        if(obj.type === 'text'){
            newObj.question = obj.question.replace(/&quot;/g, "\"").replace(/&#039;/g, "'");
            return newObj;

        }
        
        newObj.correct_answer = obj.correct_answer.replace(/&quot;/g, "\"").replace(/&#039;/g, "'");
        newObj.incorrect_answers = obj.incorrect_answers.map( incorrectAnswer => incorrectAnswer.replace(/&quot;/g, "\"").replace(/&#039;/g, "'") );
        newObj.question = obj.question.replace(/&quot;/g, "\"").replace(/&#039;/g, "'");
        return newObj;
    });

    arr.forEach((obj, index, thisArr)=>{
        if(thisArr[index].type === 'text'){
            thisArr[index].question = formatedQuestionObj[index].question;
            return;
        }
        thisArr[index].question = formatedQuestionObj[index].question;
        thisArr[index].correct_answer = formatedQuestionObj[index].correct_answer;
        thisArr[index].incorrect_answers = formatedQuestionObj[index].incorrect_answers;
    });

    return arr

}