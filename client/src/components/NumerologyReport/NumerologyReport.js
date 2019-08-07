import React, { Component } from 'react';
import NumReportContext from '../../contexts/NumReportContext'
import NumerologyReportData from '../NumerologyReportData/NumerologyReportData';
import NumerologyReportHeader from '../NumerologyReportHeader/NumerologyReportHeader';
import './NumerologyReport.css';

export default class NumerologyReport extends Component {
    static contextType = NumReportContext

    /* componentDidMount() {
        this.context.clearError()
        NumApiService.getUserData()
    } */

    render() {
        const { error } = this.context
        return (
            <section className='NumerologyReport'>
                {error
                    ? <p className='red'>There was an error, try again</p>
                    : (this.context.userData.length === 0)
                        ? this.props.history.push('/')
                        : <section className='NumerologyReport'>
                            <NumerologyReportHeader />
                            <NumerologyReportData />
                        </section>
                }
            </section>
        )
    }
}