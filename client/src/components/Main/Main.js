import React, { Component } from 'react';
import BarChart from '../BarChart';
import PieChart from '../PieChart';
import ScatterPlot from '../ScatterPlot';
import WeatherGraph from '../WeatherGraph';
import PineapplePie from '../PineapplePie';
import MovieRatings from '../MovieRatings';
import Nav from '../Nav/Nav';

import basicBarData from '../../data/basic-bar';

//new code
import './Main.scss';
import Dropdowns from './dropdowns.js'

class Main extends Component {
  render() {
    return (
      <div>
          <Dropdowns />
      </div>
    )
  }
}

export default Main;
