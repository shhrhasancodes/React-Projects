import React, { Component } from 'react';

function Question(props) {
    return (
        <div>
            <h2>{props.dataSet.question}</h2>
        </div>
    );
}

export default Question;