import React, { Component } from 'react';
import NumReportContext from '../../contexts/NumReportContext'
import HelpersService from '../../services/helpers-service'
import NumListItem from '../../components/NumListItem/NumListItem'
import './NumerologyReportData.css';
//const { numNameData, userStats } = require('../seed');


export default class NumerologyReportData extends Component {
    static contextType = NumReportContext

    renderArr(arr, data) {
        return arr.map((num, idx) => 
            <NumListItem
                key={idx}
                number={num}
                numData={data}
            />
        )
    }

    render() {
        const { userData = [] } = this.context
        console.log(userData)

        return (
            <div className='NumerologyReportData'>
                <section className='section'>
                    <div className='section__container'>
                        <div className='image__motivation image'>
                            <div className='number'>{userData.motivation}</div>
                        </div>
                        <div className='data__text'>
                            <h2 id='motivation'>Motivation</h2>
                            <div>{HelpersService.getMotivation(userData.motivation)}</div>
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__inner_self image'>
                            <div className='number'>{userData.inner_self}</div>
                        </div>
                        <div className='data__text'>
                            <h2 id='inner-self'>Inner-Self</h2>
                            <div>{HelpersService.getInnerSelf(userData.inner_self)}</div>
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__expression image'>
                            <div className='number'>{userData.expression}</div>
                        </div>
                        <div className='data__text'>
                            <h2 id='expression'>Expression</h2>
                            <div>{HelpersService.getExpression(userData.expression)}</div>
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__karmic_lessons image'>
                            <div className='number'>{userData.karmic_lessons.join(', ')}</div>
                        </div>
                        <div className='data__text'>
                            <h2 id='karmic-lessons'>Karmic Lessons</h2>
                            <div>{this.renderArr(userData.karmic_lessons, 'karmic')}</div>
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__hidden_tendencies image'>
                            <div className='number'>{userData.hidden_tendencies.join(', ')}</div>
                        </div>
                        <div className='data__text'>
                            <h2 id='hidden-tendencies'>Hidden Tendencies</h2>
                            <div>{this.renderArr(userData.hidden_tendencies, 'hidden')}</div>
                        </div>
                    </div>
                    <div className='section__container'>
                        <div className='image__subconscious_response image'>
                            <div className='number'>{userData.subconscious_response}</div>
                        </div>
                        <div className='data__text'>
                            <h2 id='subconscious-response'>Subconscious Response</h2>
                            <div>{HelpersService.getSubconciousResponse(userData.subconscious_response)}</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}