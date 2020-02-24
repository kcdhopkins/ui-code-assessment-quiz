import React, {Component} from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './reducers/mapStateToProps';
import mapDispatchToProps from './reducers/mapDispathToProps';
import SelectionType from './SelectionType';
import Summary from './Summary';

class App extends Component{

    componentDidMount(){
        this.props.getApiData('http://localhost:4000/api/questions');
    }

    render(){
        const appStyle = {
            width: '400px',
            height: '400px'
        }

        return(
            <form style={appStyle} onSubmit={ !this.props.testOver ? this.props.handleSubmit : this.props.retake}>
                <div style = {{margin: '20px', height: '100%'}}>
                     <p style={{fontSize: this.props.testOver ? 'x-large': 'medium', fontWeight: this.props.testOver ? 'bold': 'normal'}}>{this.props.question}</p>
                     { !this.props.testOver ? <SelectionType/> : <Summary summaryInfo = {this.state}/>}
                    <input type="submit" value={ this.props.testOver ? "Restart Quiz" : "Next"} alt={this.props.questiontype}/>
                </div>
            </form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
