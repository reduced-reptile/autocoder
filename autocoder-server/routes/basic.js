var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const parseString = require('xml2js').parseString;
const utils = require('./utils.js');

/* GET basics page. */
router.get('/1', function(req, res, next) {
  let xmlFilePath = '../res/values/strings.xml';
  if (req.query.lang === 'fr') {
    xmlFilePath = '../res/values-fr/strings.xml';
  }
  fs.readFile(path.join(__dirname, xmlFilePath), 'utf-8', function (error, xml) {
    utils.catchError(error, 'The dynamic strings failed to load', req, res);
    parseString(xml, function (err, result) {
      utils.catchError(err, 'Could not parse dynamic strings', req, res);
      const stringResources = result['resources']['string'];
      const arrayResources = result['resources']['string-array'];
      const contestLanguageLabels = utils.getProperty('contest_language_label_array', arrayResources, req, res);
      const additionalLanguageLabels = utils.getProperty('additional_language_label_array', arrayResources, req, res);
      res.render('basic', {
        title: utils.getProperty('title', stringResources, req, res),
        basicFormHref: utils.getProperty('basic_form_href', stringResources, req, res),
        problemTitle: utils.getProperty('problem_title', stringResources, req, res),
        problemDescription: utils.getProperty('problem_description', stringResources, req, res),
        inputSpeciﬁcation: utils.getProperty('input_speciﬁcation', stringResources, req, res),
        outputSpeciﬁcation: utils.getProperty('output_speciﬁcation', stringResources, req, res),
        programmingLanguage: utils.getProperty('programming_language', stringResources, req, res),
        contestLanguages: utils.getProperty('contest_languages', stringResources, req, res),
        contestLanguageOptions: utils.getProperty('contest_language_value_array', arrayResources, req, res).map(function (val, i) {
          return  { value: val, label: contestLanguageLabels[i] }
        }),
        additionalLanguages: utils.getProperty('additional_languages', stringResources, req, res),
        additionalLanguageOptions: utils.getProperty('additional_language_value_array', arrayResources, req, res).map(function (val, i) {
          return  { value: val, label: additionalLanguageLabels[i] }
        }),
        submitButtonLabel: utils.getProperty('submit_button_label', stringResources, req, res),
      });
    });
  });
});

module.exports = router;
