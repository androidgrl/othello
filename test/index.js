const chai = require('chai');
const assert = chai.assert;
require('./board_test');
require('./square_test');
require('./piece_test');
require('./game_test');
require('./player_test');

describe('my test suite', function () {
  xit('should work yo', function () {
    assert(true);
  });
});
