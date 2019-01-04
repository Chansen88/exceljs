'use strict';

var ExcelJS = {
  Workbook: require('./doc/workbook'),
  ModelContainer: require('./doc/modelcontainer'),
  stream: {
    xlsx: {
      WorkbookWriter: require('./stream/xlsx/workbook-writer'),
      WorkbookReader: require('./stream/xlsx/workbook-reader')
    }
  },
  config: {}
};

Object.assign(ExcelJS, require('./doc/enums'));

module.exports = ExcelJS;
//# sourceMappingURL=exceljs.nodejs.js.map
