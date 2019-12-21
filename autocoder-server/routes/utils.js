function catchError(error, message, req, res) {
  if (error) {
    res.locals.message = message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};
    // render the error page
    res.status(500);
    res.render('error');
    throw error;
  }
}

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
      if (typeof resource['item'] === 'undefined') {
        return resource['_']; // a simple string
      }
      return resource['item']; // an array
    }
    catchError(true, 'The string ' + key + ' was not found', req, res);
  }
}