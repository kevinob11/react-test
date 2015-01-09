/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');

module.exports = {

  // An action to update the time reports view.
  addTimeReport(report) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.UPDATE_TIME_REPORTS,
      report: report
    });
  }

};
