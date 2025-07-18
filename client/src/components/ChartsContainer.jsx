import React from 'react';
import BarCharts from './BarCharts';
import AreaCharts from './AreaCharts';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useState } from 'react';

const ChartsContainer = ({ data }) => {
    const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarCharts data={data} /> : <AreaCharts data={data} />}
    </Wrapper>
  );
}

export default ChartsContainer;