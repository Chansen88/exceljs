'use strict';

var ExcelJS = {
  Workbook: require('./doc/workbook')
};

// Object.assign mono-fill
var Enums = require('./doc/enums');

Object.keys(Enums).forEach(function (key) {
  ExcelJS[key] = Enums[key];
});

module.exports = ExcelJS;
//# sourceMappingURL=exceljs.browser.js.map
