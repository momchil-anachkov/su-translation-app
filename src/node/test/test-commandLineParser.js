(function() {
  const chai = require('chai');
  const parser = require('../commandLineParser.js');
  const assert = chai.assert;

  describe('commandLineParser', function() {
    describe('parsing incorrect input', function() {
      it('should throw on incorrect command', function() {
        assert.throws(parser.parse.bind(this, 'asdf'));
      });
      it('should throw on incorrect translate syntax', function() {
        assert.throws(parser.parse.bind(this, 'translate "this is a cat" en'));
      });
      it('should throw on incorrect d-translate syntax', function() {
        assert.throws(parser.parse.bind(this, 'd-translate en'));
      });
      it('should throw on incorrect detect syntax', function() {
        assert.throws(parser.parse.bind(this, 'detect'));
      });
      it('should throw on incorrect multi syntax', function() {
        assert.throws(parser.parse.bind(this, 'multi "some text"'));
      });
      it('should throw on incorrect d-multi syntax', function() {
        assert.throws(parser.parse.bind(this, 'd-multi "some other text"'));
      });
      it('should throw on incorrect chain syntax', function() {
        assert.throws(parser.parse.bind(this, 'chain "some other text" en'));
      });
    });
    describe('translate', function() {
      var testobj = parser.parse('translate "this is a cat" en bg');
      it('returns object', function () {
        assert.isObject(testobj)
      });
      it('has expected values', function () {
        assert.strictEqual(testobj.command, 'translate');
        assert.strictEqual(testobj.queue[0].text, 'this is a cat');
        assert.strictEqual(testobj.queue[0].sourceLanguage, 'en');
        assert.strictEqual(testobj.queue[0].targetLanguage, 'bg');
      });
    });
    describe('d-translate', function() {
      var testobj = parser.parse('d-translate "this is a cat" bg');
      it('returns object', function () {
        assert.isObject(testobj)
      });
      it('has expected values', function () {
        assert.strictEqual(testobj.command, 'd-translate');
        assert.strictEqual(testobj.queue[0].text, 'this is a cat');
        assert.strictEqual(testobj.queue[0].targetLanguage, 'bg');
      });
    });
    describe('detect', function() {
      var testobj = parser.parse('detect "this is a cat"');
      it('returns object', function () {
        assert.isObject(testobj)
      });
      it('has expected values', function () {
        assert.strictEqual(testobj.command, 'detect');
        assert.strictEqual(testobj.queue[0].text, 'this is a cat');
      });
    });
    describe('multi', function() {
      var testobj = parser.parse('multi "this is a cat" en bg de fr');
      it('returns object', function () {
        assert.isObject(testobj)
      });
      it('has expected values', function () {
        assert.strictEqual(testobj.command, 'multi');
        assert.strictEqual(testobj.queue.length, 3);
        assert.strictEqual(testobj.queue[0].text, 'this is a cat');
        assert.strictEqual(testobj.queue[0].sourceLanguage, 'en');
        assert.strictEqual(testobj.queue[0].targetLanguage, 'bg');
        assert.strictEqual(testobj.queue[1].text, 'this is a cat');
        assert.strictEqual(testobj.queue[1].sourceLanguage, 'en');
        assert.strictEqual(testobj.queue[1].targetLanguage, 'de');
        assert.strictEqual(testobj.queue[2].text, 'this is a cat');
        assert.strictEqual(testobj.queue[2].sourceLanguage, 'en');
        assert.strictEqual(testobj.queue[2].targetLanguage, 'fr');
      });
    });
    describe('d-multi', function() {
      var testobj = parser.parse('d-multi "this is a cat" en bg de');
      it('returns object', function () {
        assert.isObject(testobj)
      });
      it('has expected values', function () {
        assert.strictEqual(testobj.command, 'd-multi');
        assert.strictEqual(testobj.queue.length, 3);
        assert.strictEqual(testobj.queue[0].text, 'this is a cat');
        assert.strictEqual(testobj.queue[0].targetLanguage, 'en');
        assert.strictEqual(testobj.queue[1].text, 'this is a cat');
        assert.strictEqual(testobj.queue[1].targetLanguage, 'bg');
        assert.strictEqual(testobj.queue[2].text, 'this is a cat');
        assert.strictEqual(testobj.queue[2].targetLanguage, 'de');
      });
    });
    describe('chain', function() {
      var testobj = parser.parse('chain "this is a cat" en bg de fr en');
      it('returns object', function () {
        assert.isObject(testobj)
      });
      it('has expected values', function () {
        assert.strictEqual(testobj.command, 'chain');
        assert.strictEqual(testobj.queue[0].text, 'this is a cat');
        assert.strictEqual(testobj.queue[0].sourceLanguage, 'en');
        assert.strictEqual(testobj.queue[0].targetLanguage, 'bg');
        assert.isNull(testobj.queue[1].text);
        assert.strictEqual(testobj.queue[1].sourceLanguage, 'bg');
        assert.strictEqual(testobj.queue[1].targetLanguage, 'de');
        assert.isNull(testobj.queue[2].text);
        assert.strictEqual(testobj.queue[2].sourceLanguage, 'de');
        assert.strictEqual(testobj.queue[2].targetLanguage, 'fr');
        assert.isNull(testobj.queue[3].text);
        assert.strictEqual(testobj.queue[3].sourceLanguage, 'fr');
        assert.strictEqual(testobj.queue[3].targetLanguage, 'en');
      });
    });
  });
}())
