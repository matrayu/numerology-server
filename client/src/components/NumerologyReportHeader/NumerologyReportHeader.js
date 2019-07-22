import React, { Component } from 'react';
import './NumerologyReportHeader.css';
const { userStats, userDetails } = require('../seed');

class NumerologyReportHeader extends Component {
    render() {

        return (
            <div className='reportHeader__wrapper'>
                <div>
                    <h1>{userDetails.name}</h1>
                    <h3>{userDetails.dob}</h3>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Destiny<br/>Number</p>
                            <p>{userStats.destiny}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Motivation<br/>Number</p>
                            <p>{userStats.motivation}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Inner-Self<br/>Number</p>
                            <p>{userStats.innerSelf}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Expression<br/>Number</p>
                            <p>{userStats.expression}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Karmic<br/>Lessons</p>
                            <p>{userStats.karmicLessons.join(', ')}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Hidden<br/>Tendencies</p>
                            <p>{userStats.hiddenTendencies.join(', ')}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Subconscious<br/>Response</p>
                            <p>{userStats.subconsciousResponse}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Life Cycles</p>
                        <p>Turning Points</p>
                        <p>Challenges</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NumerologyReportHeader