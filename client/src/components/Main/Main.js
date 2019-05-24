import React, { Component } from 'react';
import BarChart from '../BarChart';
import basicBarData from '../../data/basic-bar';
import Nav from '../Nav/Nav';

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
