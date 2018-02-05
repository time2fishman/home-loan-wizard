import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NextBtn extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <h1 name="promptText" className="home-text">Home Loan Wizard</h1> <br />
                    <Link to="/wOne" >
                        <button name="nextButton" className="home-btn">Get Started</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NextBtn;