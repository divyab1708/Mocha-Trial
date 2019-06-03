var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Math',function(){
	describe("test 1", function(){
		it("should return 9 as an answer",function(){
			assert.equal(9,3*3);
		})
		it("should return -8 as an answer",function(){
			assert.equal(-8,(3-4)*8);
		})
	})
})