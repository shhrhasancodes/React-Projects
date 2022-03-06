import React, { Component } from 'react';

function Answers(props) {
    return (
        <div className = "answers">
            <button className = "btn btn-lg btn-success" onClick = { () =>props.handleClick(props.choice) } type = "button">{props.answers}</button>
        </div>
            
    );
}

export default Answers;