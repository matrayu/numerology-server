import React, { Component } from 'react';
import NumerologyReportData from '../NumerologyReportData/NumerologyReportData';
import NumerologyReportHeader from '../NumerologyReportHeader/NumerologyReportHeader';
import './NumerologyReport.css';

export default class NumerologyReport extends Component {
    render() {
        return (
            <div>
                <section className='NumerologyReport__header'>
                    <NumerologyReportHeader />
                </section>
                <section className='NumerologyReport__data'>
                    <NumerologyReportData />
                </section>
            </div>
            
        )
    }
}