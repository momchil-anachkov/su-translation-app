(function(module) {
  'use strict';

  const regexRepo = require ('./regexRepo');
  const parse = require ('shell-quote').parse;
  const quote = require ('shell-quote').quote;

//  function getLanguages(str) {
//    var matches
//    var output = [];
//    while (matches = regexRepo.languages.exec(str)) {
//        output.push(matches[1]);
//    }
//    return output;
//  }

  var commandLineParser = {};

  commandLineParser.parse = function(line) {
    var parsed = parse(line);

    var command = parsed[0];
    var text = parsed[1];
    var langs = parsed.slice(2);

//    var command = line.match(regexRepo.extractCommand)[1];
//    var paramstr = line.match(regexRepo.extractParams)[1];
//    var text = paramstr.match(regexRepo.text)[0];
//    var langs = getLanguages(paramstr);

    var i;
    var result = {
      command: command,
      queue: []
    };

    switch (command) {
      case 'translate':
        result.queue.push({
          text: text,
          sourceLanguage: langs[0],
          targetLanguage: langs[1]
        });
        break;
      case 'multi':
        for(i=1; i<langs.length; i++) {
          result.queue.push({
            text: text,
            sourceLanguage: langs[0],
            targetLanguage: langs[i]
          });
        }
        break;
      case 'detect':
        result.queue.push({
          text: text
        });
        break;
      case 'd-translate':
        result.queue.push({
          text: text,
          targetLanguage: langs[0]
        });
        break;
      case 'd-multi':
        for(i=0; i<langs.length; i++) {
          result.queue.push({
            text: text,
            targetLanguage: langs[i]
          });
        }
        break;
      case 'chain':
        result.queue.push({
          text: text,
          sourceLanguage: langs[0],
          targetLanguage: langs[1]
        });
        for(i=2; i<langs.length; i++) {
          result.queue.push({
            text: null,
            sourceLanguage: langs[i-1],
            targetLanguage: langs[i]
          });
        }
        break;
      default:
        throw new SyntaxError('Invalid Command');
        break;
    }

    return result;
  };

  module.exports = exports = commandLineParser;
}(module));
