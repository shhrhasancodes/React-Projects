import React, { Component } from 'react';
import TextWidget from './TextWidget';
import BarChart from './BarChart3D';
import Doughnet from './Doughnet3D';
import TrendLine from './trendLine';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Helmet from 'react-helmet';


const config = {
    apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
    spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg'
}
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId
    }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;



class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            dropdownOptions : [],
            items : [],
            users:0,
            newUsers:0,
            organicSourceViews : 0,
            emailSourceViews : 0,
            directSourceViews : 0,
            socialSourceViews:0,
            referralSourceViews : 0,
            pageViews:0,
            selectedValue : null,
            sourceViews : [],
        }
    }


    getData = arg => {

        const arr = this.state.items;
        const arrLen = arr.length;
        let organicSourceViews = 0;
        let socialSourceViews = 0;
        let referralSourceViews = 0;
        let emailSourceViews = 0;
        let directSourceViews = 0;
        let users = 0;
        let newUsers = 0;
        let pageViews = 0;
        let selectedValue = null;
        let sourceViews = [];

        for (let i = 0; i < arrLen; i++) {
            if (arg === arr[i]["month"]) {

                organicSourceViews = arr[i].organic_source;
                socialSourceViews = arr[i].social_source; 
                referralSourceViews = arr[i].referral_source; 
                emailSourceViews = arr[i].email_source; 
                directSourceViews = arr[i].direct_source; 
                users = arr[i].users; 
                newUsers = arr[i].new_users; 
                pageViews = arr[i].page_views; 
                sourceViews.push(
                        {
                          label: "Organic Views",
                          value: this.state.organicSourceViews
                        },
                        {
                          label: "Direct Views",
                          value: this.state.directSourceViews
                        },
                        {
                          label: "Social Views",
                          value: this.state.socialSourceViews
                        },
                        {
                          label: "Referral Views",
                          value: this.state.referralSourceViews
                        },
                        {
                          label: "Email Views",
                          value: this.state.emailSourceViews
                        },
                );
            }
        }
        selectedValue = arg;

        this.setState({
            organicSourceViews: organicSourceViews,
            socialSourceViews: socialSourceViews,
            referralSourceViews: referralSourceViews,
            emailSourceViews: emailSourceViews,
            directSourceViews: directSourceViews,
            users: users,
            newUsers: newUsers,
            pageViews: pageViews,
            sourceViews: sourceViews,
                        
        });
    };

    updateDashboard = event => {
        this.getData(event.value);
        this.setState({ selectedValue: event.value });
    };


    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(data => {

                let batchRowValues = data.valueRanges[0].values;

                const rows = [];

                for (let i = 1; i < batchRowValues.length; i++) {
                    let rowObject = {};
                    for (let j = 0; j < batchRowValues[i].length; j++) {
                        rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
                        
                    }
                    
                    rows.push(rowObject);
                }

                // dropdown options
                let dropdownOptions = [];

                for (let i = 0; i < rows.length; i++) {
                    dropdownOptions.push(rows[i].month);
                }

                this.setState(
                    {
                        items: rows,
                        dropdownOptions: dropdownOptions,
                        selectedValue: "Jan 2018"
                    },
                    () => this.getData("Jan 2018")
                );

            });
    }  


    

    render() { 

        return (
            
                <div className='body'>
                    <Helmet>
                        <title>Social Media Analytics</title>
                    </Helmet>
                    <div className='Navbar'>
                            <h3>Dashboard</h3>
                            <div className='dropdown'>
                                <Dropdown options = {this.state.dropdownOptions} onChange={this.updateDashboard} value = {this.state.selectedValue} placeholder="Select an option" />
                            </div>
                    </div>                    
                
                <div className='container'>

                <div className='row'>
                        <div className='col'>
                            <TextWidget title = "Organic Source" value = {this.state.organicSourceViews} />
                        </div>
                        <div className="col">
                        <TextWidget title = "Referral Source" value = {this.state.referralSourceViews} />
                        </div>
                        <div className="col">
                        <TextWidget title = "Users" value = {this.state.users} />
                        </div>
                        <div className="col">
                        <TextWidget title = "New Users" value = {this.state.newUsers} />
                        </div>
                        <div className="col">
                        <TextWidget title = "Page Views" value = {this.state.pageViews} />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col cards'>
                            <BarChart  title = "Source Views Comparision" data = {this.state.sourceViews} />
                        </div>
                        <div className="col cards">
                            <Doughnet  title = "Source Views Comparision" data = {this.state.sourceViews} />
                        </div>
                        <div className="col cards last">
                            <TrendLine title = "Source Views Comparision" data = {this.state.sourceViews} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Dashboard;