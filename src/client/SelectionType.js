import React from 'react';
import Multiple from './SelectionTypes/Multiple';
import { useSelector} from 'react-redux';
import Boolean from './SelectionTypes/Boolean.js';
import Text from "./SelectionTypes/Text";

const SelectionType = props => {
    //const questionInfo = props.questionInfo;

    const questionInfo = useSelector( state => state.questiontype);
   
        switch(questionInfo){
            case 'multiple': 
                return (<Multiple />);
             case 'boolean': 
                return (<Boolean />);
            case 'text': 
                 return (<Text />);
             default:
                return (<p>Waiting for Data....</p>)
     }
}

export default SelectionType;