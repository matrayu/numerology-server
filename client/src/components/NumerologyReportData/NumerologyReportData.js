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
                            <div>Motivation</div>
                            <div>{userData.motivation}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/200" alt="Motivation"></img>
                            <div>{HelpersService.getMotivation(userData.motivation)}</div>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <div>Inner-Self</div>
                            <div>{userData.inner_self}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/201" alt="Inner-Self"></img>
                            <div>{HelpersService.getInnerSelf(userData.inner_self)}</div>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <div>Expression</div>
                            <div>{userData.expression}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/204" alt="Expression"></img>
                            <div>{HelpersService.getExpression(userData.expression)}</div>  
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
                            <div>{this.renderArr(userData.karmic_lessons, 'karmic')}</div>  
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <div>Hidden Tendencies</div>
                            <div>{userData.hidden_tendencies.join(', ')}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/203" alt="Hidden Tendencies"></img>
                            <div>{this.renderArr(userData.hidden_tendencies, 'hidden')}</div> 
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <div>Subconscious Response</div>
                            <div>{userData.subconscious_response}</div>
                        </div>
                        <div>
                            <img src="https://picsum.photos/205" alt="Subconscious Response"></img>
                            <div>{HelpersService.getSubconciousResponse(userData.subconscious_response)}</div>  
                        </div>
                    </span>
                </section>
            </div>
        )
    }
}