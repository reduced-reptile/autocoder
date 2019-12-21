const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const parseString = require('xml2js').parseString;
const utils = require('./utils.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, '../res/values/strings.xml'), 'utf-8', function (error, xml) {
    utils.catchError(error, 'The dynamic strings failed to load', req, res);
    parseString(xml, function (err, result) {
      utils.catchError(err, 'Could not parse dynamic strings', req, res);
      const stringResources = result['resources']['string'];
      const arrayResources = result['resources']['string-array'];
      res.render('index/index', {
        title: utils.getProperty('title', stringResources, req, res),
        welcomeMessage:utils.getProperty('welcome_message', stringResources, req, res),
        vueTitle: utils.getProperty('vue_title', stringResources, req, res),
        vueDescription: utils.getProperty('vue_description_array', arrayResources, req, res),
        vueList: utils.getProperty('vue_reason_array', arrayResources, req, res),
        vueHref: utils.getProperty('vue_href', stringResources, req, res),
        vueLink: utils.getProperty('vue_link', stringResources, req, res),
        basicTitle: utils.getProperty('basic_title', stringResources, req, res),
        basicDescription: utils.getProperty('basic_description_array', arrayResources, req, res),
        basicHref: utils.getProperty('basic_href', stringResources, req, res),
        basicLink: utils.getProperty('basic_link', stringResources, req, res),
      });
    });
  });
});

module.exports = router;
