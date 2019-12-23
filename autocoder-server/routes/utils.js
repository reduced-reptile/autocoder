// TODO: Figure out how to remove the duplication of the functions below
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

function getErrorMessageTranslation(errorMessage, lang) {
  switch(lang) { // We cannot store these in a file, as they may occur before we can load our strings.
    case 'fr':
      switch(errorMessage) {
        case 'The key word ':
          return 'Le mot clé ';
        case ' was not found':
          return ' est introuvable.';
        case 'The dynamic sentences failed to load':
          return 'Impossible de charger les phrases dynamiques';
        case 'Could not parse dynamic sentences':
          return 'Impossible d\'analyser les phrases dynamiques'
        default:
          return 'Erreur';
      }
    default:
      return errorMessage // It's already in english, the default
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
  getProperty:function(key, resources, lang, req, res) {
    var resource = resources.find(resource => {
      return resource['$']['name'] === key
    });
    if(resource) {
      if (typeof resource['item'] === 'undefined') {
        return resource['_']; // a simple string
      }
      return resource['item']; // an array
    }
    catchError(true, getErrorMessageTranslation('The key word ', lang) + key + getErrorMessageTranslation(' was not found', lang), req, res);
  },
  getErrorMessageTranslation:function(errorMessage, lang) {
    switch(lang) { // We cannot store these in a file, as they may occur before we can load our strings.
      case 'fr':
        switch(errorMessage) {
          case 'The key word ':
            return 'Le mot clé ';
          case ' was not found':
            return ' est introuvable';
          case 'The dynamic sentences failed to load':
            return 'Impossible de charger les phrases dynamiques';
          case 'Could not parse dynamic sentences':
            return 'Impossible d\'analyser les phrases dynamiques'
          default:
            return 'Erreur';
        }
      default:
        return errorMessage // It's already in english, the default
    }
  }
}