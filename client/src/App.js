import React, { Component } from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import ScatterPlot from './components/ScatterPlot';
import WeatherGraph from './components/WeatherGraph';
import PineapplePie from './components/PineapplePie';
import MovieRatings from './components/MovieRatings';
import './App.css';

import basicBarData from './data/basic-bar';
import basicPieData from './data/basic-pie';
import basicScatter from './data/basic-scatter';
import weatherData from './data/weather-data';
import pineappleData from './data/pineapple-on-pizza';
import movieRatings from './data/movie-ratings';

import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Main from './components/Main/Main.js';
import Chart from './components/Chart/Chart.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/chart" component={Chart}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
