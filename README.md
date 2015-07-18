# xlsToJSON
Simple script to organize the object you get back from `xlsjs`

v0.0.1

[![Build Status](https://travis-ci.org/wilson428/xlsToJSON.png)](https://travis-ci.org/wilson428/downcache)

# Example

	git clone https://github.com/wilson428/xls-to-json
	npm install
	cd xls-to-json

	var xlsToJSON = require("./index");

	var json = xlsToJSON.json("test/2012pres.xls", "2012 Pres General Results");
	var rows = xlsToJSON.rows("test/2012pres.xls", "2012 Pres Primary Party Summary");


