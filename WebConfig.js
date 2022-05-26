class WebConfig {

  static PORT = 8095;

  static endpoints = new (function() {

    this.files = {

      home: '',
      app: 'files/views/scripts/app.js'
    };
  });
};

export default WebConfig;
