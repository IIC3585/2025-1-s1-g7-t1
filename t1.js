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

const writeHtml = (filepath, data) =>
    fs.writeFileSync(
      filepath,
      data,
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
export const swapColumns = (file, n, m) => {
    const data = readCSV(file);
    const swap = (row, a, b) => _.concat(_.slice(row, 0, a), _.slice(row, b, b + 1), _.slice(row, a + 1, b), _.slice(row, a, a + 1), _.slice(row, b + 1))
    const newData = _.map(data, (row) =>
        n === m
        ? row
        : n < m
            ? swap(row, n - 1, m - 1)
            : swap(row, m - 1, n - 1)
      );
    writeCSV(file, newData);
};

// Transform to HTML Table (file)
export const transformToHTMLTable = (file) => {
    const data = readCSV(file);
    const newData = 
        `<table>\n` +
        _.join(_.map(data, (row) => 
            `    <tr>\n` +
                _.map(row, (cell) => 
                    `        <td>${cell}</td>`
                )
            .join("\n") +
            `\n    </tr>`
        ), "\n") +
        `\n</table>`;
    writeHtml("data.html", newData);
};


// Columns to Rows (file )
export const columnsToRows = (file) => {};

// Rows to Columns (file )
export const rowsToColumns = (file) => {};

transformToHTMLTable("data.csv");
