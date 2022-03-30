import React, { Component } from 'react';
import './dashboard.css';
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function trendLine(props) {
      
      
      // STEP 3 - Creating the JSON object to store the chart configurations
      const chartConfigs = {
        type: "line", // The chart type
        "renderAt": "chartContainer",
        "width": "350",
        "height": "350", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            Caption: props.title,
            //Set the chart subcaption
            subCaption: "In K = One thousand",
            //Set the x-axis name
            xAxisName: "Views Type",
            //Set the y-axis name
            yAxisName : "No of views",
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

export default trendLine;