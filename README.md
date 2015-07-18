# excel-to-clean-json
Simple script to organize the object you get back from `xlsjs`. There are a lot of these, and I make no clean to have the best.

v0.0.1

[![Build Status](https://travis-ci.org/wilson428/xlsToJSON.png)](https://travis-ci.org/wilson428/downcache)

# Example

	npm install excel-to-clean-json

	var xlsToJSON = require("excel-to-clean-json");

	var json = xlsToJSON.json("test/2012pres.xls", "2012 Pres General Results");
	var rows = xlsToJSON.rows("test/2012pres.xls", "2012 Pres Primary Party Summary");

# API

`xlsToJSON.json(filename, worksheet_name)` converts a specific worksheet to an array of Javascript objects, one for each row. It assumes the first row has head information and uses it as the keys. For example, from `npm test`:

	[
		{
		    "1": 2,
		    "FEC ID": "P80003353",
		    "STATE": "Alabama",
		    "STATE ABBREVIATION": "AL",
		    "GENERAL ELECTION DATE": 41219,
		    "FIRST NAME": "Mitt",
		    "LAST NAME": "Romney",
		    "LAST NAME,  FIRST": "Romney, Mitt",
		    "PARTY": "R",
		    "GENERAL RESULTS": 1255925,
		    "GENERAL %": 0.6054582232982282,
		    "WINNER INDICATOR": "W"
		},
		{
		    "1": 3,
		    "FEC ID": "P80003338",
		    "STATE": "Alabama",
		    "STATE ABBREVIATION": "AL",
		    "GENERAL ELECTION DATE": 41219,
		    "FIRST NAME": "Barack",
		    "LAST NAME": "Obama",
		    "LAST NAME,  FIRST": "Obama, Barack",
		    "PARTY": "D",
		    "GENERAL RESULTS": 795696,
		    "GENERAL %": 0.3835903309875247
		}


`xlsToJSON.rows(filename, worksheet_name)` will convert a specific worksheet to an array of arrays. Use this when there is no header info.

	[
		[
    		"Summary of 2012 Presidential Primary Vote Totals by Party"
  		],
  		[
		    "Republican Party (R)",
		    19530335
		],
		[
			"Democratic Party (D)",
			8571580
		]


`xlsToJSON(filename)` will convert every worksheet using `.json`.
