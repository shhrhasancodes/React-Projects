import React, { Component } from 'react';

import Success from './Success';
import Fail from './Fail';


function Result(props) {

    if(props.correct < 5 && props.incorrect > 5 ){
        return (<Fail />);
    }

    return (
        <Success />
        );        
    }


export default Result;