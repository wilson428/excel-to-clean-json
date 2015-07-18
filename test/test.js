var xlsToJSON = require("../index");
var fs = require("fs");

var json = xlsToJSON.json("test/2012pres.xls", "2012 Pres General Results");
fs.writeFileSync("test/presidential_results.json", JSON.stringify(json, null, 2));

var rows = xlsToJSON.rows("test/2012pres.xls", "2012 Pres Primary Party Summary");
fs.writeFileSync("test/presidential_parties.json", JSON.stringify(rows, null, 2));