import React, { Component } from 'react';
import './NumerologyReportHeader.css';
import NumReportContext from '../../contexts/NumReportContext'
//const { userStats, userDetails } = require('../seed');

class NumerologyReportHeader extends Component {
    static contextType = NumReportContext
    

    render() {
        const { userData = [] } = this.context
        let date = new Date(userData.dob)
        let dob = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`

        return (
            <div className='NumerologyReportHeader'>
                <div className='header_userData'>
                    <h1>{`${userData.first_name} ${userData.middle_name} ${userData.last_name}`}</h1>
                    <h3>{dob}</h3>
                </div>
                <section className='header_numData'>
                    <div className='header_text'>Motivation <span className='header_number'>{userData.motivation}</span></div>
                    <div className='header_text'>Inner-Self <span className='header_number'>{userData.inner_self}</span></div>
                    <div className='header_text'>Expression <span className='header_number'>{userData.expression}</span></div>
                    <div className='header_text'>Karmic Lessons <span className='header_number'>{userData.karmic_lessons.join(', ')}</span></div>
                    <div className='header_text'>Hidden Tendencies <span className='header_number'>{userData.hidden_tendencies.join(', ')}</span></div>
                    <div className='header_text'>Subconscious Response <span className='header_number'>{userData.subconscious_response}</span></div>
                </section>
            </div>
        )
    }
}

export default NumerologyReportHeader