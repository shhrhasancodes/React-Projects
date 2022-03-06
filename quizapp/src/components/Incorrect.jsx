import React, { Component } from 'react';

function Incorrect(props) {
    return (
            <h2 className = "incorrect">Incorrect : <b style = {{color:'red'}}>{props.incorrect}</b></h2>
    );
}

export default Incorrect;