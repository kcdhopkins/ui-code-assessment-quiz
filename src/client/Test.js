import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

const Test = ()=>{

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return (<h1>Hello World from the test department</h1>)
}

export default Test;