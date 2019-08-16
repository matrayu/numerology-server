import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { mount } from 'enzyme';
import NumerologyReportData from './NumerologyReportData';
import context from '/Users/mfriedberg1/Documents/Projects/numerology/client/src/contexts/testHelpers.jsx'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() });

const karmic_lessons = [2,4]

it.only('renders without crashing', () => {
    const div = document.createElement('div');

    const { userData } =  { userData: {karmic_lessons: [2,4]}}
    
    ReactDOM.render(
        <BrowserRouter>
            <NumReportContext.Provider value={context}>
                <NumerologyReportData/>
            </NumReportContext.Provider>
        </BrowserRouter> , div)
    ReactDOM.unmountComponentAtNode(div);
});