import WebConfig from '../WebConfig.js';
import FileDeliver from './FileDeliver.js';

class requestMethods {

  static getMethod(point) {

    switch (point) {

      case WebConfig.endpoints.files.home:
        return FileDeliver.home

      case WebConfig.endpoints.files.app:
        return FileDeliver.app
    };

  };
};

export default requestMethods;
