import React, { Component } from 'react';

import Correct from './Correct';
import Incorrect from './Incorrect';

function ScoreArea(props) {
    return (
        <div className = "scoreArea">
            <Correct correct = {props.correct} />
            <Incorrect incorrect = {props.incorrect} />
        </div>
    );
}

export default ScoreArea;