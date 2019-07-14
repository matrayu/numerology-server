import React, { Component } from 'react';
import './NumerologyReportHeader.css';
const { numNameData, userStats, userDetails } = require('../seed');

class NumerologyReportHeader extends Component {
    render() {

        return (
            <div className='ReportHeader__wrapper'>
                <div className='ReportHeader__userDetails'>
                    <h1 className='ReportHeader__username userDetails'>{userDetails.name}</h1>
                    <h3 className='ReportHeader__userDob userDetails'>{userDetails.dob}</h3>
                </div>
                <div className='ReportHeader__stats__wrapper'>
                    <div className='ReportHeader__stats'>
                        <div className='ReportHeader__stats__text destiny top'>
                            <p>Destiny<br/>Number</p>
                            <p className='ReportHeader__stats__number'>{userStats.destiny}</p>
                        </div>
                    </div>
                    <div className='ReportHeader__stats'>
                        <div className='ReportHeader__stats__text motivation top'>
                            <p>Motivation<br/>Number</p>
                            <p className='ReportHeader__stats__number'>{userStats.motivation}</p>
                        </div>
                    </div>
                    <div className='ReportHeader__stats'>
                        <div className='ReportHeader__stats__text innerSelf top'>
                            <p>Inner-Self<br/>Number</p>
                            <p className='ReportHeader__stats__number'>{userStats.innerSelf}</p>
                        </div>
                    </div>
                    <div className='ReportHeader__stats'>
                        <div className='ReportHeader__stats__text expression top'>
                            <p>Expression<br/>Number</p>
                            <p className='ReportHeader__stats__number'>{userStats.expression}</p>
                        </div>
                    </div>
                    <div className='ReportHeader__stats'>
                        <div className='ReportHeader__stats__text karmicLessons top'>
                            <p>Karmic<br/>Lessons</p>
                            <p className='ReportHeader__stats__number'>{userStats.karmicLessons.join(', ')}</p>
                        </div>
                    </div>
                    <div className='ReportHeader__stats'>
                        <div className='ReportHeader__stats__text hiddenTendencies top'>
                            <p>Hidden<br/>Tendencies</p>
                            <p className='ReportHeader__stats__number'>{userStats.hiddenTendencies.join(', ')}</p>
                        </div>
                    </div>
                    <div className='ReportHeader__stats'>
                        <div className='ReportHeader__stats__text subconsciousResponse top'>
                            <p>Subconscious<br/>Response</p>
                            <p className='ReportHeader__stats__number'>{userStats.subconsciousResponse}</p>
                        </div>
                    </div>
                </div>
                <div className='ReportHeader__stats__dob__wrapper'>
                    <div className='ReportHeader__stats__dob__items'>
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