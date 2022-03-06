import React, { Component } from 'react';

import Answers from './Answers';

function AnswerList(props) {

    const options = [];
    for ( let i = 0 ; i < props.dataSet.options.length ; i++ ){
        options.push(<Answers handleClick = {props.handleClick} choice = {i} answers = {props.dataSet.options[i]} />);
    }
    
    return (
        <div className = "answerList">
            {options}
        </div>
    )
}

export default AnswerList;