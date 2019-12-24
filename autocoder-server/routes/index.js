const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const parseString = require('xml2js').parseString;
const utils = require('./utils.js');

/* GET home page. */
router.get('/', function(req, res, next) {
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
      res.render('index', {
        pageTitle: utils.getProperty('home_page_title', stringResources, lang, req, res),
        applicationTitle: utils.getProperty('application_title', stringResources, lang, req, res),
        language: utils.getProperty('language_code', stringResources, lang, req, res),
        welcomeMessage:utils.getProperty('welcome_message', stringResources, lang, req, res),
        languageLink: utils.getProperty('language_link', stringResources, lang, req, res),
        languageHref: utils.getProperty('language_href', stringResources, lang, req, res),
        vueTitle: utils.getProperty('vue_title', stringResources, lang, req, res),
        vueDescription: utils.getProperty('vue_description_array', arrayResources, lang, req, res),
        vueList: utils.getProperty('vue_reason_array', arrayResources, lang, req, res),
        vueUnderConstruction: utils.getProperty('vue_under_construction', stringResources, lang, req, res),
        vueHref: utils.getProperty('vue_href', stringResources, lang, req, res),
        vueLink: utils.getProperty('vue_link', stringResources, lang, req, res),
        basicTitle: utils.getProperty('basic_title', stringResources, lang, req, res),
        basicDescription: utils.getProperty('basic_description_array', arrayResources, lang, req, res),
        basicUnderConstruction: utils.getProperty('basic_under_construction', stringResources, lang, req, res),
        basicHref: utils.getProperty('basic_href', stringResources, lang, req, res),
        basicLink: utils.getProperty('basic_link', stringResources, lang, req, res),
      });
    });
  });
});

module.exports = router;
