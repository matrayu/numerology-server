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

        return (
            <div className='NumerologyReportData'>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Motivation</h2>
                            <div>{userData.motivation}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/200" alt="Motivation"></img>
                            <p>{HelpersService.getMotivation(userData.motivation)}</p>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Inner-Self</h2>
                            <div>{userData.inner_self}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/201" alt="Inner-Self"></img>
                            <p>{HelpersService.getInnerSelf(userData.inner_self)}</p>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Expression</h2>
                            <div>{userData.expression}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/204" alt="Expression"></img>
                            <p>{HelpersService.getExpression(userData.expression)}</p>  
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <div>Karmic Lessons</div>
                            <div>{userData.karmic_lessons.join(', ')}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/202" alt="Karmic Lessons"></img>
                            <p>{this.renderArr(userData.karmic_lessons, 'karmic')}</p>  
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Hidden Tendencies</h2>
                            <div>{userData.hidden_tendencies.join(', ')}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/203" alt="Hidden Tendencies"></img>
                            <p>{this.renderArr(userData.hidden_tendencies, 'hidden')}</p> 
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Subconscious Response</h2>
                            <div>{userData.subconscious_response}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/205" alt="Subconscious Response"></img>
                            <p>{HelpersService.getSubconciousResponse(userData.subconscious_response)}</p>  
                        </div>
                    </span>
                </section>
            </div>
        )
    }
}