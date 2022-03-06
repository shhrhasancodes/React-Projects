import React, { Component } from 'react';

import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';
import style from './style.css';
import dataSet from '../api/DataSet'
import Helmet from 'react-helmet';

class Questionnare extends Component {

    constructor() {
        super();
        this.state = {
            current : 0,
            correct : 0,
            incorrect : 0,
            dataSet : dataSet,
            isFinished: false
        }
        this.handleClick = this.handleClick.bind(this);

    }

   
    handleClick(choice){
        if(choice == this.state.dataSet[this.state.current].correct){
            this.setState(
                { correct : this.state.correct + 1 }
            );
        }

        else{
            this.setState(
                { incorrect : this.state.incorrect + 1 }
            );
        }

        if(this.state.current == this.state.dataSet.length -1){
            this.setState(
                { isFinished : true }
            );
        }

        else{
            this.setState(
                { current : this.state.current + 1 }
            );
        }
    }

    render() { 
        return (
            
            <div>
            <Helmet>
            <title>Quiz App</title>
            </Helmet>
            <div className = "container style font">
                <h1 className = "heading">Quiz App</h1>
                <QuizArea handleClick = {this.handleClick} isFinished = {this.state.isFinished} correct = {this.state.correct} incorrect = {this.state.incorrect} dataSet = {this.state.dataSet[this.state.current]} />
            </div>
            <div>
                <ScoreArea  correct = {this.state.correct} incorrect = {this.state.incorrect} />
            </div>
            </div>
        );
    }
}
 
export default Questionnare;