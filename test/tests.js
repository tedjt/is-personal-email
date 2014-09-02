
try {
  var personal = require('is-personal-email');
} catch (e) {
  var personal = require('..');
}

var assert = require('assert');

describe('is-personal-email', function () {

  it('should detect personal emails', function () {
    assert(personal('joe@yahoo.com'));
    assert(personal('asdsakdjad+2892@gmail.com'));
    assert(personal('normal@hotmail.com'));
    assert(personal('normal@outlook.com'));
  });

  it('should not detect company emails', function () {
    assert(!personal('ilya@segment.io'));
    assert(!personal('steve.ballmer@microsoft.com'));
  });

  it('should handle international wildcard personal emails', function () {
    assert(personal('ilay@hotmail.ru'));
    assert(personal('steve.ballmer@yandex.gr'));
    assert(!personal('steve.ballmer@yandexi.gr'));
  });
});
