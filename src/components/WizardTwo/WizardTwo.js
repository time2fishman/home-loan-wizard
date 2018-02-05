import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCity } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardTwo extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
            
                    <p name="promptText">In what city will the property be located?</p><br />
                
                    <input name="city" placeholder="city name" type="text" onChange={(e)=>this.props.updateCity(e.target.value)}/>
               
                <Link to="/wThree"><button name="nextButton" className="wTwo-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
      city: state.city
    };
}
export default connect(mapStateToProps, { updateCity })(WizardTwo); 