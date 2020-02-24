import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const Text = ()=>{
    const questionInfo = useSelector(state => state);
    if(document.querySelector('input[type="text"]')){
        document.querySelector('input[type="text"]').value = "";
    }
    
    return(<div>
            <input id="text" type="text" alt={questionInfo.questiontype}/>
        </div>);
}

export default Text;