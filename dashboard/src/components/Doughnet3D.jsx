import React, { Component } from 'react';
import './dashboard.css';
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { propTypes } from 'react-bootstrap/esm/Image';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function doughnet(props) {

      
      // STEP 3 - Creating the JSON object to store the chart configurations
      const chartConfigs = {
        type: "doughnut3d", // The chart type
        "renderAt": "chartContainer",
        "width": "360",
        "height": "350", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption: props.title,
            //Set the chart subcaption
            subCaption: "In K = One thousand",
            //Set the x-axis name
            xAxisName: "Views Type",
            //Set the y-axis name
            yAxisName : "views",
            //Set the theme for your chart
            theme: "fusion"
          },
          // Chart Data
          data: props.data
        }
      }

    return (
        <div>
            <ReactFC {...chartConfigs} />
        </div>
    );
}

export default doughnet;