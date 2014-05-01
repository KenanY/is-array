var isArray = require('../');
var test = require('tape');
var constant = require('lodash.constant');
var map = require('lodash.map');

test('returns `true` for arrays', function(t) {
  t.plan(1);

  t.ok(isArray([1, 2, 3]));
});

test('returns `false` for non arrays', function(t) {
  t.plan(9);

  var falsey = [, '', 0, false, NaN, null, undefined];

  var expected = map(falsey, constant(false));

  var actual = map(falsey, function(value, index) {
    return index ? isArray(value) : isArray();
  });

  t.notOk(isArray(arguments));
  t.notOk(isArray(true));
  t.notOk(isArray(new Date));
  t.notOk(isArray(new Error));
  t.notOk(isArray({'0': 1, 'length': 1}));
  t.notOk(isArray(1));
  t.notOk(isArray(/x/));
  t.notOk(isArray('a'));

  t.deepEqual(expected, actual);
});