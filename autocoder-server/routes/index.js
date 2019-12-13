const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const parseString = require('xml2js').parseString;
const utils = require('./utils.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, '../views/index/strings.xml'), 'utf-8', function (error, xml) {
    utils.catchError(error, 'The dynamic strings failed to load', req, res);
    parseString(xml, function (err, result) {
      utils.catchError(err, 'Could not parse dynamic strings', req, res);
      const resources = result['resources']['string'];
      res.render('index/index', {
        title: utils.getProperty('title', resources, req, res),
        welcomeMessage:utils.getProperty('welcome_message', resources, req, res),
        vueTitle: utils.getProperty('vue_title', resources, req, res),
        vueDescription1: utils.getProperty('vue_description_1', resources, req, res),
        vueDescription2: utils.getProperty('vue_description_2', resources, req, res),
        vueList1: utils.getProperty('vue_list_1', resources, req, res),
        vueList2: utils.getProperty('vue_list_2', resources, req, res),
        vueList3: utils.getProperty('vue_list_3', resources, req, res),
        vueHref: utils.getProperty('vue_href', resources, req, res),
        vueLink: utils.getProperty('vue_link', resources, req, res),
        basicTitle: utils.getProperty('basic_title', resources, req, res),
        basicDescription1: utils.getProperty('basic_description_1', resources, req, res),
        basicDescription2: utils.getProperty('basic_description_2', resources, req, res),
        basicHref: utils.getProperty('basic_href', resources, req, res),
        basicLink: utils.getProperty('basic_link', resources, req, res),
      });
    });
  });
});

module.exports = router;
