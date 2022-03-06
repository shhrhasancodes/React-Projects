import React, { Component } from 'react';

function Correct(props) {
    return (
            <h2 className = "correct">Correct : <b style = {{color:'green'}}>{props.correct}</b></h2>
    );
}

export default Correct;