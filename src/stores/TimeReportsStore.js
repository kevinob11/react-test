/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var Store = require('../core/Store');
var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');

/**
 * @typedef Page
 * @type {object}
 * @property {string} title
 * @property {string} description
 * @property {string} keywords
 */
var _reports = [{duration: 1}, {duration: 2}, {duration: 11}];

var TimeReportsStore = new Store({

  // Get all time reports
  getAll() {
    return _reports;
  },

  getTotal() {
    var total = 0;

    _reports.forEach(function(report) {
      total += report.duration;
    });

    return total;
  },

  getCount() {
    return _reports.length;
  }

});

TimeReportsStore.dispatcherToken = Dispatcher.register(payload => {

  var action = payload.action;

  if (action.actionType == ActionTypes.UPDATE_TIME_REPORTS) {
    _reports.push(action.report);
    TimeReportsStore.emitChange();
  }

});

module.exports = TimeReportsStore;
