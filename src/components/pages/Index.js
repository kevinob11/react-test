/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var TimeReportActions = require('../../actions/TimeReportActions');
var TimeReportsStore = require('../../stores/TimeReportsStore');
var App = require('../layout/App');

var getState = function () {
  var state = {
    timeReports: TimeReportsStore.getAll(),
    total: TimeReportsStore.getTotal(),
    count: TimeReportsStore.getCount()
  };

  console.log(state);

  return state
};

var HomePage = React.createClass({

  mixins: [TimeReportsStore.Mixin],
  statics: {
    layout: App
  },

  getInitialState() {
    return getState();
  },

  componentWillMount() {
    //PageActions.set({title: 'React.js Starter Kit'});
  },

  addTimeReport() {
    TimeReportActions.addTimeReport({duration: 3});
  },

  render() {
    return (
      /* jshint ignore:start */
      <div className="container">
        <button className="btn btn-success" onClick={this.addTimeReport}>TESTING</button>
        <ul>
          {this.state.timeReports.map(function(report){
            return (
              <li>{report.duration}</li>
            )
          })}
        </ul>
      </div>
      /* jshint ignore:end */
    );
  },

  onChange() {
    this.setState(getState());
  }

});

module.exports = HomePage;
