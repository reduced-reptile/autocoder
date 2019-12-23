var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const parseString = require('xml2js').parseString;
const utils = require('./utils.js');

const autocoder = require('autocoder-package');

/* GET basics page. */
router.get('/1', function(req, res, next) {
  let lang = 'en';
  let xmlFilePath = '../res/values/strings.xml';
  if (req.query.lang === 'fr') {
    lang = 'fr';
    xmlFilePath = '../res/values-fr/strings.xml';
  }
  fs.readFile(path.join(__dirname, xmlFilePath), 'utf-8', function (error, xml) {
    utils.catchError(error, utils.getErrorMessageTranslation('The dynamic strings failed to load', lang), req, res);
    parseString(xml, function (err, result) {
      utils.catchError(err, utils.getErrorMessageTranslation('Could not parse dynamic strings', lang), req, res);
      const stringResources = result['resources']['string'];
      const arrayResources = result['resources']['string-array'];
      const contestLanguageLabels = utils.getProperty('contest_language_label_array', arrayResources, lang, req, res);
      const additionalLanguageLabels = utils.getProperty('additional_language_label_array', arrayResources, lang, req, res);
      res.render('basic1', {
        title: utils.getProperty('title', stringResources, lang, req, res),
        language: utils.getProperty('language_code', stringResources, lang, req, res),
        basicFormHref: utils.getProperty('basic_form_href', stringResources, lang, req, res),
        problemTitle: utils.getProperty('problem_title', stringResources, lang, req, res),
        problemDescription: utils.getProperty('problem_description', stringResources, lang, req, res),
        inputSpeciﬁcation: utils.getProperty('input_speciﬁcation', stringResources, lang, req, res),
        outputSpeciﬁcation: utils.getProperty('output_speciﬁcation', stringResources, lang, req, res),
        programmingLanguage: utils.getProperty('programming_language', stringResources, lang, req, res),
        contestLanguages: utils.getProperty('contest_languages', stringResources, lang, req, res),
        contestLanguageOptions: utils.getProperty('contest_language_value_array', arrayResources, lang, req, res).map(function (val, i) {
          return  { value: val, label: contestLanguageLabels[i] }
        }),
        additionalLanguages: utils.getProperty('additional_languages', stringResources, lang, req, res),
        additionalLanguageOptions: utils.getProperty('additional_language_value_array', arrayResources, lang, req, res).map(function (val, i) {
          return  { value: val, label: additionalLanguageLabels[i] }
        }),
        submitButtonLabel: utils.getProperty('submit_button_label', stringResources, lang, req, res),
      });
    });
  });
});

/* POST get the results of the autocoder though the body page. */
router.post('/2', function(req, res, next) {
  // TODO: Check these are valid
  autocoder(
    'code',
    req.body.lang,
    req.body.problemTitle,
    req.body.problemDescription,
    req.body.inputSpeciﬁcation,
    req.body.outputSpeciﬁcation,
    req.body.programmingLanguage);
  let lang = 'en';
  let xmlFilePath = '../res/values/strings.xml';
  if (req.query.lang === 'fr') {
    lang = 'fr';
    xmlFilePath = '../res/values-fr/strings.xml';
  }
  fs.readFile(path.join(__dirname, xmlFilePath), 'utf-8', function (error, xml) {
    utils.catchError(error, utils.getErrorMessageTranslation('The dynamic strings failed to load', lang), req, res);
    parseString(xml, function (err, result) {
      utils.catchError(err, utils.getErrorMessageTranslation('Could not parse dynamic strings', lang), req, res);
      const stringResources = result['resources']['string'];
      const arrayResources = result['resources']['string-array'];
      const contestLanguageLabels = utils.getProperty('contest_language_label_array', arrayResources, lang, req, res);
      const additionalLanguageLabels = utils.getProperty('additional_language_label_array', arrayResources, lang, req, res);
      res.render('basic2', {
        title: utils.getProperty('title', stringResources, lang, req, res),
        language: utils.getProperty('language_code', stringResources, lang, req, res),
        basicFormHref: utils.getProperty('basic_form_href', stringResources, lang, req, res),
        problemTitle: utils.getProperty('problem_title', stringResources, lang, req, res),
        problemDescription: utils.getProperty('problem_description', stringResources, lang, req, res),
        inputSpeciﬁcation: utils.getProperty('input_speciﬁcation', stringResources, lang, req, res),
        outputSpeciﬁcation: utils.getProperty('output_speciﬁcation', stringResources, lang, req, res),
        programmingLanguage: utils.getProperty('programming_language', stringResources, lang, req, res),
        contestLanguages: utils.getProperty('contest_languages', stringResources, lang, req, res),
        contestLanguageOptions: utils.getProperty('contest_language_value_array', arrayResources, lang, req, res).map(function (val, i) {
          return  { value: val, label: contestLanguageLabels[i] }
        }),
        additionalLanguages: utils.getProperty('additional_languages', stringResources, lang, req, res),
        additionalLanguageOptions: utils.getProperty('additional_language_value_array', arrayResources, lang, req, res).map(function (val, i) {
          return  { value: val, label: additionalLanguageLabels[i] }
        }),
        submitButtonLabel: utils.getProperty('submit_button_label', stringResources, lang, req, res),
      });
    });
  });
});

module.exports = router;
