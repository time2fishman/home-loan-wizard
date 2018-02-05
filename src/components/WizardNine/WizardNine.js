import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateAddOne, updateAddTwo, updateAddThree } from './../../ducks/reducer'
import { connect } from 'react-redux'; 

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p name="promptText">What is your address?</p> <br />

                    <input type="text" id="addressOne" placeholder="Street Address" onChange={ (e)=>this.props.updateAddOne(e.target.value) }/>
                    <input type="text" id="addressTwo" placeholder="Street Address Cont'd (Optional)" onChange={ (e)=>this.props.updateAddTwo(e.target.value) }/>
                    <input type="text" id="addressThree" placeholder="City, ST 00000" onChange={ (e)=>this.props.updateAddThree(e.target.value) }/>
               
                
                    <Link to="/wTen"><button name="nextButton" className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
  return { 
     addressOne: state.addressOne,
     addressTwo: state.addressTwo,
     addressThree: state.addressThree
  };
}
export default connect(mapStateToProps, { updateAddOne, updateAddTwo, updateAddThree })(WizardNine); 