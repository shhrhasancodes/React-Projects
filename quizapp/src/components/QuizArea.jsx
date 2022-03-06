import React, { Component } from 'react';
import Question from './Question';
import AnswerList from './AnswerList';
import Result from './Result';

function QuizArea(props) {

    if(props.isFinished){
        return (
          <Result correct = {props.correct} incorrect = {props.incorrect} />  
        );
    }

    return (  

        <div>
            <Question dataSet = {props.dataSet} />
            <AnswerList handleClick = {props.handleClick} dataSet = {props.dataSet} />
        </div>
    );
}

export default QuizArea;