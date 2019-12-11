const express = require('express');
const autocoder = require('autocoder-package');
const router = express.Router();
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.2',
    info: {
      title: 'Autocoder',
      version: '1.0.0'
    }
  },
  apis: ['./routes/api.js']
};

const swaggerSpec = swaggerJSDoc(options);

/**
 * @swagger
 *
 * /autocoder:
 *   post:
 *     description: Execute a step of the autocoder
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: step
 *         description: Step for the autocoder to execute
 *         in: formData
 *         required: true
 *         type: string
 *       - name: data
 *         description: The data (string or jsonified object) for the autocoder step 
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: The content of the response of the autocoder passed in
 */
router.post('/v1.0.0/autocoder', function(req, res, next) {
  res.json(autocoder(req.body.step, req.body.data));
});

router.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

module.exports = router;
