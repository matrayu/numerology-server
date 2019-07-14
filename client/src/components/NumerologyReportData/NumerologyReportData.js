import React, { Component } from 'react';
import './NumerologyReportData.css';
const { numNameData, user } = require('../seed');


export default class NumerologyReportData extends Component {
    render() {
        return (
            <div className='reportData__wrapper'>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Destiny</h2>
                            <p>Proident culpa esse proident fugiat quis voluptate exercitation. Culpa adipisicing incididunt culpa nostrud labore aute. Labore excepteur sunt enim eiusmod laboris magna fugiat dolore laborum cillum tempor minim. Occaecat ut eu irure commodo enim ea anim sint. Ad incididunt voluptate sint sit. Velit minim anim occaecat velit et.</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/200" alt="Card 1" class="img"></img>
                            <div>1</div>
                        </div>
                    </span>
                </section>
                <section className='section'>
                    <span>
                        <div>
                            <h2>Motivation</h2>
                            <p>Proident culpa esse proident fugiat quis voluptate exercitation. Culpa adipisicing incididunt culpa nostrud labore aute. Labore excepteur sunt enim eiusmod laboris magna fugiat dolore laborum cillum tempor minim. Occaecat ut eu irure commodo enim ea anim sint. Ad incididunt voluptate sint sit. Velit minim anim occaecat velit et.</p>
                        </div>
                        <div>
                            <img src="https://picsum.photos/201" alt="Card 2" class="img"></img>
                            <div>7</div>
                        </div>
                    </span>
                </section>
            </div>
        )
    }
}