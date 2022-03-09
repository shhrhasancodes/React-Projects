import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './bmr.css';


class BMRCalc extends Component {
    constructor() {
        super();
        this.state = {
            gender :'',
            weightInPounds:'',
            weightInKgs:'',
            heightInFeet:'',
            heightInInches:'',
            age:'',
            activity:'',
            bmr:'',
            error:'',
            calories:'',
            button:'',
            heightInCms:''
        }
    }

    getGender = (event) => {
        this.setState({ gender : event.target.value });
    }

    getAge = (event) => {
        this.setState({ age : event.target.value });
    }

    getHeightFeet = (event) => {
        this.setState({ heightInFeet : event.target.value });
    }

    getHeightInches = (event) => {
        this.setState({ heightInInches : event.target.value });
    }

    getActivity = (event) => {
        this.setState({ activity : event.target.value });
    }

    getWeightPounds = (event) => {
        this.setState({ weightInPounds : event.target.value });
    }
    
    getHeightCms = (event) => {
        this.setState({ heightInCms : event.target.value });
    }

    getWeightKgs = (event) => {
        this.setState({ weightInKgs : event.target.value });
    }


    BMRCalcImperial(){
        let age = this.state.age;
        let gender = this.state.gender;
        let heightInFeet = this.state.heightInFeet;
        let heightInInches = this.state.heightInInches;
        let height = heightInFeet * 12 + Number(heightInInches);
        let weight = this.state.weightInPounds;
        console.log(height);

        if(age == '' || gender == '' || heightInFeet == '' || heightInInches == '' || weight == '')
        {
            this.setState({error : '*All Fields are Required!'});
            return;
        }

// BMR calculation (imperial): 
// Man BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
// Woman BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )


        let bmrcalc;
        if(gender == 2)
        {
            bmrcalc = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
        }
        else if (gender == 1)
        {
            bmrcalc = 655.1 + ( 4.35 * weight ) + ( 4.7 * height ) - ( 4.7 * age );
        }

        this.setState({bmr:bmrcalc});
        this.setState({error : ''});

    }

    BMRCalcMetric(){
        let age = this.state.age;
        let gender = this.state.gender;
        let heightInCms = this.state.heightInCms; 
        let weight = this.state.weightInKgs;

        if(age == '' || gender == '' || heightInCms == '' || weight == '')
        {
            this.setState({error : '*All Fields are Required!'});
            return;
        }

// BMR calculation (Metric): 
// Man BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
// Woman BMR = BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )



        let bmrCalc;
        if(gender == 2)
        {   
            bmrCalc = 66.5 +  (13.75 * weight) + (5.003 * heightInCms) - (6.755 * age);
        }
        else if (gender == 1)
        {
            bmrCalc = 655 + ( 9.563 * weight ) + ( 1.850 * heightInCms ) - ( 4.676 * age );
        }

        this.setState({bmr:bmrCalc});
        this.setState({error : ''});

    }

    
    getCalories(){
        let Calories;
        let bmr = this.state.bmr;
        let activity = this.state.activity;
        Calories =  bmr * activity;
        this.setState({calories:Calories});
    }
    

    handleImperial = (event) => {
        this.setState({ button : event.target.value });
    }

    handleMetrics = (event) => {
        this.setState({ button : event.target.value });
    }
    


    render() { 
        let error;
        if(this.state.error){
            error = <div className="error">{this.state.error}</div>
        }

        let calResult;
        if(this.state.calories)
        {
            calResult = <div className='result'>{this.state.calories}</div>
        }

        let bmrResult;
        if(this.state.bmr)
        {
            bmrResult = 
            <div>
                <div className='result'>{this.state.bmr}</div>
                    <div className="workout">
                        <div className=" container inputwrap">
                            <label className="label"><b>Workout in a Week</b></label>
                            <select className="activity" value={this.state.activity} onChange={this.getActivity} name="activity">
                                <option value="">Select your Activity</option>
                                <option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
                                <option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
                                <option value="1.55">Moderately Active (Moderate exercise 3 to 5 days per week)</option>
                                <option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
                                <option value="1.9">Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)</option>
                            </select>
                        </div>
                        <button className='btn' onClick={() => this.getCalories()} type="button">Calculate Calories</button>
                        {calResult}
                    </div>
            </div>
        }


        let btnType1;
        if(this.state.button == 1) {
            <div id="bmrcalc">
                <div className="form">
                    <h2>BMR &amp; Daily Calorie Calculator</h2>
                    <div>
                    <h4 className='inline h4'>Choose :</h4>
                    <button className='btnStyle inline' value={1} onClick={this.handleMetrics}>Imperial</button>
                    <button className='btnStyle' value={2} onClick={this.handleImperial} id='btn'>Metric</button>
                    </div>
                    <div className="inputwrap">
                        <label className="label"><b>Gender</b></label><label><input type="radio" checked = {this.state.gender === '1'} onChange={this.getGender} className="genderF" name="gender" value="1" /> Female</label><label><input type="radio" checked = {this.state.gender === '2'} onChange={this.getGender} className="genderM" name="gender" value="2" /> Male</label>
                    </div>
                    <div className="inputwrap">
                        <label className="label"><b>Weight in Pounds</b></label><input type="number" onChange={this.getWeightPounds} name="weight" className="weight" min="0" max="999" />
                    </div>
                    <div className="inputwrap">
                        <label className="label"><b>Height in feet and inches</b></label><input type="number" onChange={this.getHeightFeet} name="heightFeet" className="heightFeet" min="0" max="8" /><input type="number" name="heightInches" onChange={this.getHeightInches} className="heightInches" min="0" max="11" />
                    </div>
                    <div className="inputwrap">
                        <label className="label"><b>Age in years</b></label><input type="number" onChange={this.getAge} className="age" name="age" min="0" max="120" />
                    </div>
                    <button className='btn' onClick={() => this.BMRCalcImperial()} type="button">Calculate BMR</button>
                    {error} {bmrResult} 
                </div>
            </div>
        }
        
        
        
        let btnType2;
        if(this.state.button == 2){
            btnType2 = <div id="bmrcalc">
            <div className="form">
                <h2>BMR &amp; Daily Calorie Calculator</h2>
                <div>
                    <h4 className='inline h4'>Choose :</h4>
                    <button className='btnStyle inline' value={1} onClick={this.handleMetrics}>Imperial</button>
                    <button className='btnStyle' value={2} onClick={this.handleImperial} id='btn'>Metric</button>
                    </div>
                <div className="inputwrap">
                    <label className="label"><b>Gender</b></label><label><input type="radio" checked = {this.state.gender === '1'} onChange={this.getGender} className="genderF" name="gender" value="1" /> Female</label><label><input type="radio" checked = {this.state.gender === '2'} onChange={this.getGender} className="genderM" name="gender" value="2" /> Male</label>
                </div>
                <div className="inputwrap">
                    <label className="label"><b>Weight in kg's</b></label><input type="number" onChange={this.getWeightKgs} name="weight" className="weight" min="0" max="999" />
                </div>
                <div className="inputwrap">
                    <label className="label"><b>Height in cm's</b></label><input type="number" onChange={this.getHeightCms} name="heightFeet" className="heightFeet" min="0" max="8" />
                </div>
                <div className="inputwrap">
                    <label className="label"><b>Age in years</b></label><input type="number" onChange={this.getAge} className="age" name="age" min="0" max="120" />
                </div>
                <button className='btn' onClick={() => this.BMRCalcMetric()} type="button">Calculate BMR</button>
                {error} {bmrResult} {btnType1}
            </div>
        </div>
        }

        
       

        return (

            <div id="bmrcalc">
                <Helmet>
                <title>BMR Calculator</title>
                </Helmet>
                <div className="form">
                    <h2>BMR &amp; Daily Calorie Calculator</h2>
                    <div>
                    <h4 className='inline h4'>Choose :</h4>
                    <button className='btnStyle inline' value={1} onClick={this.handleMetrics}>Imperial</button>
                    <button className='btnStyle' value={2} onClick={this.handleImperial} id='btn'>Metric</button>
                    </div>
                    <div className="inputwrap">
                        <label className="label"><b>Gender</b></label><label><input type="radio" checked = {this.state.gender === '1'} onChange={this.getGender} className="genderF" name="gender" value="1" /> Female</label><label><input type="radio" checked = {this.state.gender === '2'} onChange={this.getGender} className="genderM" name="gender" value="2" /> Male</label>
                    </div>
                    <div className="inputwrap">
                        <label className="label"><b>Weight in Pounds</b></label><input type="number" onChange={this.getWeightPounds} name="weight" className="weight" min="0" max="999" />
                    </div>
                    <div className="inputwrap">
                        <label className="label"><b>Height in feet and inches</b></label><input type="number" onChange={this.getHeightFeet} name="heightFeet" className="heightFeet" min="0" max="8" /><input type="number" name="heightInches" onChange={this.getHeightInches} className="heightInches" min="0" max="11" />
                    </div>
                    <div className="inputwrap">
                        <label className="label"><b>Age in years</b></label><input type="number" onChange={this.getAge} className="age" name="age" min="0" max="120" />
                    </div>
                    <button className='btn' onClick={() => this.BMRCalcImperial()} type="button">Calculate BMR</button>
                    {error} {bmrResult} 
                </div>
                {btnType2}
            </div>
            
        );
    }
}
 
export default BMRCalc;