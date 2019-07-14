import React, { Component } from 'react';
import './NumerologyReportData.css';
const { numNameData, user } = require('../seed');


export default class NumerologyReportData extends Component {
    render() {
        return (
            <div className='reportData__wrapper'>
                <section className='reportData__section'>
                    <span className='reportData__section__container__odd'>
                        <div className='reportData__section__group'>
                            <h2 className='reportData__section__title'>Destiny</h2>
                            <p className='reportData__section__info'>Proident culpa esse proident fugiat quis voluptate exercitation. Culpa adipisicing incididunt culpa nostrud labore aute. Labore excepteur sunt enim eiusmod laboris magna fugiat dolore laborum cillum tempor minim. Occaecat ut eu irure commodo enim ea anim sint. Ad incididunt voluptate sint sit. Velit minim anim occaecat velit et.</p>
                        </div>
                        <div className='reportData__section__group image__group'>
                            <img src="https://picsum.photos/200" alt="Card 1" class="img card--1-img"></img>
                            <div className='reportData__section__group__number centered black'>1</div>
                        </div>
                    </span>
                </section>
                <section className='reportData__section'>
                    <span className='reportData__section__container__even'>
                        <div className='reportData__section__group'>
                            <h2 className='reportData__section__title'>Motivation</h2>
                            <p className='reportData__section__info'>Proident culpa esse proident fugiat quis voluptate exercitation. Culpa adipisicing incididunt culpa nostrud labore aute. Labore excepteur sunt enim eiusmod laboris magna fugiat dolore laborum cillum tempor minim. Occaecat ut eu irure commodo enim ea anim sint. Ad incididunt voluptate sint sit. Velit minim anim occaecat velit et.</p>
                        </div>
                        <div className='reportData__section__group image__group'>
                            <img src="https://picsum.photos/201" alt="Card 2" class="img card--2-img"></img>
                            <div className='reportData__section__group__number centered black'>7</div>
                        </div>
                    </span>
                </section>
            </div>
        )
    }
}