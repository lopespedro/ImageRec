import Webconfig from '../WebConfig.js';
import requestMethods from './requestMethods.js'

/* Get files */


const requestCatcher = function(app) {

  const getFiles = function() {

    const endpoints = Webconfig.endpoints.files;

    _edpListenerGets(endpoints, app, this);

  };

  getFiles.call(getFiles);
};

function _edpListenerGets(endpoints, app, oCaller) {

  Object.keys(endpoints).forEach(key => {

    let point = endpoints[key];

    app.get(('/' + point), (data, resolve) => {

      resolve[oCaller.name.indexOf('File') > -1 ? 'sendFile' : 'send'](requestMethods.getMethod(point).call(app, data),
        { root: '.' });
    });
  });
};

export default requestCatcher;
