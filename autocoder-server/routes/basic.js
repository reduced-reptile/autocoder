var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const parseString = require('xml2js').parseString;
const utils = require('./utils.js');

/* GET basics page. */
router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, '../views/basic/strings.xml'), 'utf-8', function (error, xml) {
    utils.catchError(error, 'The dynamic strings failed to load', req, res);
    parseString(xml, function (err, result) {
      utils.catchError(err, 'Could not parse dynamic strings', req, res);
      const resources = result['resources']['string'];
      res.render('basic/basic', {
        title: utils.getProperty('title', resources, req, res),
        problemTitle: utils.getProperty('problem_title', resources, req, res),
        problemDescription: utils.getProperty('problem_description', resources, req, res),
        inputSpeciﬁcation: utils.getProperty('input_speciﬁcation', resources, req, res),
        outputSpeciﬁcation: utils.getProperty('output_speciﬁcation', resources, req, res),
        numberOfTests: utils.getProperty('number_of_tests', resources, req, res),
        submitButtonLabel: utils.getProperty('submit_button_label', resources, req, res),
      });
    });
  });
});

module.exports = router;
