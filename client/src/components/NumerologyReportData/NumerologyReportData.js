import React, { Component } from 'react';
import './NumerologyReportData.css';
const { numNameData, userStats } = require('../seed');


export default class NumerologyReportData extends Component {
    render() {
         
        return (
            <div className='reportData__wrapper'>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Destiny</h2>
                            <p>{numNameData.destiny[userStats.destiny]}</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/200" alt="Destiny"></img>
                            <div>{userStats.destiny}</div>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Motivation</h2>
                            <p>{numNameData.motivation[userStats.motivation]}</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/201" alt="Motivation"></img>
                            <div>{userStats.motivation}</div>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Inner Self</h2>
                            <p>{numNameData.innerSelf[userStats.innerSelf]}</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/202" alt="Inner Self"></img>
                            <div>{userStats.innerSelf}</div>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Expression</h2>
                            <p>{numNameData.expression[userStats.expression]}</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/203" alt="Expression"></img>
                            <div>{userStats.expression}</div>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Karmic Lessons</h2>
                            <p>{numNameData.karmicLessons[userStats.karmicLessons]}</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/204" alt="Karmic Lessons"></img>
                            <div>{userStats.karmicLessons.join(', ')}</div>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Hidden Tendencies</h2>
                            <p>{numNameData.hiddenTendencies[userStats.hiddenTendencies]}</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/205" alt="Hidden Tendencies"></img>
                            <div>{userStats.hiddenTendencies.join(', ')}</div>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Subconscious Response</h2>
                            <p>{numNameData.subconsciousResponse[userStats.subconsciousResponse]}</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/206" alt="Subconscious Response"></img>
                            <div>{userStats.subconsciousResponse}</div>
                        </div>
                    </span>
                </section>
            </div>
        )
    }
}