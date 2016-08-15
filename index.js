var xls = require("xlsjs");

module.exports = function(filename, format) {
	format = format || "json";
	var output = {};

	// iterate through workbooks
	xls.readFile(filename).SheetNames.forEach(function(worksheet_name) {
		if (format == "rows") {
			output[worksheet_name] = worksheetToRows(filename, worksheet_name);
		} else {
			output[worksheet_name] = worksheetToJSON(filename, worksheet_name);
		}
	});
	return output;
}

// input: AB
// output: 27
function abecidianToColumnNumber(code) {
	var column = 0;
	for (var c = 0; c < code.length; c += 1) {
		var letter = code[code.length - 1 - c];
		var value = letter.charCodeAt(0) - 64;
		column += value * Math.pow(26, c);
	}
	return column;
}


// convert the XLS worksheet, in which each cell is a top-level key, to rows
// for when there isn't a header
var worksheetToRows = module.exports.rows = function(filename, worksheet_name) {
	var file = xls.readFile(filename),
		worksheet = file.Sheets[worksheet_name],
		data = [];

	// group by row
	for (var key in worksheet) {
		var match = /([A-Z]+)(\d+)/.exec(key);

		if (!match) {
			//console.log("No match", key);
			continue;
		}

		var letters = match[1],
			numbers = match[2],
			col = abecidianToColumnNumber(letters),
			row = parseInt(numbers, 10);

		if (typeof worksheet[key].v === "string") {
			worksheet[key].v = worksheet[key].v.trim();
		}

		if (row && col && worksheet[key].v !== "") {
			data[row-1] = data[row-1] || [];
			data[row-1][col-1] = worksheet[key].v;
		}
	}
	return data;
}

// apply headers to rows to make objects
// for when there IS a header
var worksheetToJSON = module.exports.json = function(filename, worksheet_name) {
	var rows = worksheetToRows(filename, worksheet_name),
		headers = rows.shift(),
		data = [];

	rows = rows.map(function(row) {
		var datum = {};
		row.forEach(function(field, f) {
			datum[headers[f]] = field;
		});
		return datum;
	});
	return rows;	
}