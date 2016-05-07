(function(module) {
  'use strict';

  function CommandExecutor(soapClient, printer) {
    this._service = soapClient;
    this._printer = printer;
  }

  CommandExecutor.prototype.executeChain = function (commandObject, i) {
    var self = this;
        self._service.singleTranslate(commandObject.queue[i], function(err, result) {
          if (err) {
            console.log('translate error is:');
            console.log(err);
          } else {
            self._printer.print(result);
            if (!commandObject.queue[i+1]) {
              return;
            }
            commandObject.queue[i+1].text = result[Object.keys(result)[0]];
            self.executeChain(commandObject, i+1);
          }
        });
  };

  CommandExecutor.prototype.executeSingle = function (command, args) {
    var self = this;
    switch(command) {
      case 'translate':
      case 'chain':
        self._service.singleTranslate(args, function(err, result) {
          if (err) {
            console.log('translate error is:');
            console.log(err);
          } else {
            self._printer.print(result);
          }
        });
        break;
      case 'detect':
        self._service.detect(args, function(err, result) {
          if (err) {
            console.log('detect error is:');
            console.log(err);
          } else {
            self._printer.print(result);
          }
        });
        break;
      case 'd-translate':
        self._service.detectTranslate(args, function(err, result) {
          if (err) {
            console.log('d-translate error is:');
            console.log(err);
          } else {
            self._printer.print(result);
          }
        });
        break;
    }
  };

  CommandExecutor.prototype.execute = function (commandObject) {
    var i;
    if (commandObject.command === 'chain') {
      this.executeChain(commandObject, 0);
    } else {
      if (commandObject.command === 'multi') commandObject.command = 'translate';
      if (commandObject.command === 'd-multi') commandObject.command = 'd-translate';
      for(i=0; i<commandObject.queue.length; i++) {
        this.executeSingle(commandObject.command, commandObject.queue[i]);
      }
    }
  }

  module.exports = exports = CommandExecutor;
}(module));
