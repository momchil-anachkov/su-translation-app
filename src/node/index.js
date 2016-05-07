(function () {
  'use strict';

  const readline = require('readline');
  const clp = require('./commandLineParser');
  const cex = require('./commandExecutor');
  const pr = require('./responsePrinter');
  const soap = require('soap');
  const rl = readline.createInterface(process.stdin, process.stdout);
  const url = 'http://192.168.1.121:8080/Translation/services/Translation?wsdl';

  //TODO: Create client
  soap.createClient(url, function(err, client) {
    var executor;
    if (err) {
      console.log('Connection not established');
      return;
    } else {
      executor = new cex(client, pr);

      rl.setPrompt('TRANSLATOR> ');
      rl.prompt();

      rl.on('line', (line) => {
        var parsed;
        try {
          parsed = clp.parse(line);
          executor.execute(parsed);
          //TODO: stuff

          //rl.prompt();
        } catch (e) {
          console.log(e);
          rl.prompt();
        }
      }).on('close', () => {
        console.log('Have a great day!');
        process.exit(0);
      });
    }
  });

//
//  clp.parse('detect "this is a cat"');
//  clp.parse('translate [eng] "this is a cat" [de]');
//  clp.parse('multi [eng] "this is a cat" [de] [fr]');
//  clp.parse('d-translate "this is a cat" [de]');
//  clp.parse('d-multi "this is a cat" [de] [eng] [fr]');
//  clp.parse('chain [eng] "this is a cat" [de] [eng]');
}())
