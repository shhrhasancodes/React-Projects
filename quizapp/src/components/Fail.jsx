import React, { Component } from 'react';
import fail from '../images/failed.jpg';

function Fail() {
    return (
        <div>
            <img className = "fail" src={fail} width={"250px"} height = {"200px"} alt="" />
        </div>
    );
}

export default Fail;