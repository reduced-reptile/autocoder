module.exports = {
  catchError:function(error, message, req, res) {
    if (error) {
      res.locals.message = message;
      res.locals.error = req.app.get('env') === 'development' ? error : {};
      // render the error page
      res.status(500);
      res.render('error');
      throw error;
    }
  },
  getProperty:function(key, resources, req, res) {
    var resource = resources.find(resource => {
      return resource['$']['name'] === key
    });
    if(resource) {
      return resource['_']
    }
    catchError(true, 'The string ' + key + 'was not found', req, res);
  }
}