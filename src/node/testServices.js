(function() {
  'use strict';
  
  const soap = require('soap');
  const ce = require('./commandExecutor');
  const pr = require('./responsePrinter');

  var url = 'http://192.168.1.121:8080/Translation/services/Translation?wsdl';

  var translateArgs = {
    text: 'This is a cat',
    sourceLanguage: 'en',
    targetLanguage: 'bg'
  };
  var detectArgs = {
    text: 'This is a cat'
  };
  var detectTranslateArgs = {
    text: 'This is a cat',
    targetLanguage: 'bg'
  };

  soap.createClient(url, function(err, client) {
    var executor; 
    if (err) {
      console.log('connection error is:');
      console.log(err);
    } else {
      executor = new ce(client, pr);
      executor.execute({
        command: 'translate',
        queue: [{
          text: 'this is a cat',
          sourceLanguage: 'en',
          targetLanguage: 'bg'
        }]
      });
      executor.execute({
        command: 'detect',
        queue: [{
          text: 'this is a cat'
        }]
      });
      executor.execute({
        command: 'd-translate',
        queue: [{
          text: 'this is a cat',
          targetLanguage: 'bg'
        }]
      });
//      client.singleTranslate(translateArgs, function(err, result) {
//        if (err) {
//          console.log('translate error is:');
//          console.log(err);
//        } else {
//          console.log('result is:');
//          console.log(result);
//        }
//      });
//      client.detect(detectArgs, function(err, result) {
//        if (err) {
//          console.log('translate error is:');
//          console.log(err);
//        } else {
//          console.log('result is:');
//          console.log(result);
//        }
//      });
//      client.detectTranslate(detectTranslateArgs, function(err, result) {
//        if (err) {
//          console.log('translate error is:');
//          console.log(err);
//        } else {
//          console.log('result is:');
//          console.log(result);
//        }
//      });
    }


  });

}());
