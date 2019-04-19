import React from 'react';
import ReactDOM from 'react-dom';
import Sum from './Sum';
const a = {
    selected: {
      Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
      "Operating System": {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
      "Video Card":{
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
      Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
    }
  }
describe('list Sum without crashing', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sum selected=
        {a}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});