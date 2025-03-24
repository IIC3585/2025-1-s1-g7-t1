import _ from "lodash";
import fs from "fs";

const readCSV = (filepath) =>
  fs
    .readFileSync(filepath, "utf-8")
    .split("\n")
    .map((line) => line.split(","));

const writeCSV = (filepath, data) =>
  fs.writeFileSync(
    filepath,
    data.map((row) => row.join(",")).join("\n"),
    "utf-8"
  );

// Insert Row (file, n, row)
export const insertRow = (file, n, row) => {};

// Insert Column (file, n, column)
export const insertColumn = (file, n, column) => {};

// Delete Row (file, n)
export const deleteRow = (file, n) => {
  const data = readCSV(file);
  const newData = _.filter(data, (row, index) => index !== n);
  writeCSV(file, newData);
};

// Delete Column (file, n)
export const deleteColumn = (file, n) => {
  const data = readCSV(file);
  const newData = _.map(data, (row) =>
    _.concat(_.slice(row, 0, n), _.slice(row, n + 1))
  );
  writeCSV(file, newData);
};

// Swap Columns (file, n, m)
export const swapColumns = (file, n, m) => {};

// Transform to HTML Table (file)
export const transformToHTMLTable = (file) => {};

// Columns to Rows (file )
export const columnsToRows = (file) => {};

// Rows to Columns (file )
export const rowsToColumns = (file) => {};
