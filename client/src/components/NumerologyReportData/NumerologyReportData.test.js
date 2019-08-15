import React from 'react';
import ReactDOM from 'react-dom';
import NumerologyReportData from './NumerologyReportData';
import NumReportContext from '../../contexts/NumReportContext'
import { BrowserRouter} from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

it.skip('renders without crashing', () => {
    const div = document.createElement('div');

    const { userData } =  { userData: {karmic_lessons: [2,4]}}
    /* console.log(userData.karmic_lessons.join(',')) */
    ReactDOM.render(
        
        <NumReportContext.Provider value={userData}>
            <NumerologyReportData/>
        </NumReportContext.Provider> , div)
    ReactDOM.unmountComponentAtNode(div);
});