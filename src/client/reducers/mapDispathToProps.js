
const mapDispatchToProps = dispatch =>{

    return{
        getApiData: url => dispatch({type: 'getApiData', apiEndPoint: url, dispatch: dispatch}),
        retake: e => {
            e.preventDefault();
            dispatch({type: 'retake', el: e});
            dispatch({type: 'setApiData'});
        },
        handleSubmit: e => {
            e.preventDefault();
            dispatch({type: 'submit', el: e.target});
            dispatch({type: 'setData'});
        }
    }
}

export default mapDispatchToProps;