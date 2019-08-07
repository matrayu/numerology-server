import React, { Component } from 'react'
import HelpersService from '../../services/helpers-service'
//import { Link } from 'react-router-dom'

export default class NumListItem extends Component {
    render() {
        let content;
        if (this.props.numData === 'karmic') {
            content = HelpersService.getKarmicLessons(this.props.number)
        }
        content = HelpersService.getHiddenTendencies(this.props.number)
        
        return (
            <p>{content}</p>
        )
    }
}