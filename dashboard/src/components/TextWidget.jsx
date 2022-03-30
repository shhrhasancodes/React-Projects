import React, { Component } from 'react';
import './dashboard.css';
import CountUp from 'react-countup';

function TextWidget(props) {
    return (
        <div className='widgetWrap'>
                <div className="widgetTitle">
                    {props.title}
                </div>
                <div className="widgetValue">
                    <div className="value">
                        <h2>
                        <CountUp 
                            start = {0}
                            end = {props.value}
                            duration = {2}
                            separator = ","
                        />
                        </h2>
                    </div>
                </div>
        </div>
    );
}

export default TextWidget;