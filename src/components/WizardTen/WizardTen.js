import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateFirstName, updateLastName, updateEmail } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardTen extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p name="promptText">What is your name?</p> <br />

                    <input type="text" id="first" placeholder="First Name" onChange={ (e)=>this.props.updateFirstName(e.target.value) }/>
                    <input type="text" id="last" placeholder="Last Name" onChange= { (e)=>this.props.updateLastName(e.target.value) }/>
                    <input type="text" id="email" placeholder="email" onChange={ (e)=>this.props.updateEmail(e.target.value) }/>
                    
                    <Link to="/wEleven"><button name="nextButton" className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}


function mapStateToProps( state ) {
  return { 
     firstName: state.firstName,
     lastName: state.lastName,
     email: state.email
  };
}
export default connect(mapStateToProps, { updateFirstName, updateLastName, updateEmail })(WizardTen); 