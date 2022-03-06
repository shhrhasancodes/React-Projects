import React, { Component } from 'react';
import success from '../images/passed.jpg';

function Success() {
    return (
        <div>
            <img className = "success" src={success} width={"300px"} height = {"200px"} alt="" />
        </div>
    );
}

export default Success;