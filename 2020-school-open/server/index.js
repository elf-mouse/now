const fs = require('fs');
const path = require('path');
const Excel = require('exceljs');
const config = require('./config');

let data = [];
const output = path.join(__dirname, `${config.target}/data/wuhan2020.json`);
const file = path.join(__dirname, 'data.xlsx');

let workbook = new Excel.Workbook();

workbook.xlsx
  .readFile(file)
  .then(() => {
    const worksheet = workbook.getWorksheet(1);

    // Input
    worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
      if (rowNumber > 1 && row.values.length) {
        let index = rowNumber - 2;
        let item = {
          notice: {}
        };

        row.eachCell(function(cell, colNumber) {
          let value = cell.value;

          if (value.richText) {
            value = value.richText.text;
          }
          if (colNumber === 2 || colNumber === 3) {
            let date = new Date(value);
            if (!isNaN(date)) {
              let year = date.getFullYear();
              let month = date.getMonth() + 1;
              let day = date.getDate();

              if (month < 10) {
                month = `0${month}`;
              }
              if (day < 10) {
                day = `0${day}`;
              }

              value = `${year}-${month}-${day}`;
            }
          }

          switch (colNumber) {
            case 1:
              item.keyword = `%${index}:${value}%`;
              item.name = value;
              break;
            case 2:
              item.notice.time = value;
              break;
            case 3:
              item.time = value;
              break;
            case 4:
              item.notice.title = value;
              break;
            case 5:
              item.notice.content = value;
              break;
            case 6:
              item.url = value;
              break;
            case 7:
              item.notice.source = value;
              break;
          }
        });

        data.push(item);
      }
    });

    // Test
    // console.log(data.slice(3));

    // Output
    fs.writeFile(output, JSON.stringify(data), function(err) {
      if (err) {
        return console.log(err);
      }
      console.log(`created: ${output}`);
    });
  })
  .catch(error => {
    console.log(error.message);
  });
