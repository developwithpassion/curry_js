import curry from './curry';
import { expect } from 'chai';

const simple_function = curry((a, b) => a + b);
const is_function = val => typeof val === 'function';

describe('simple currying', function() {
  describe('when a curried function with multiple arguments is invoked', function() {
    describe('with all of the arguments it needs', function() {
      let result;

      beforeEach(function() {
        result = null;
      });

      beforeEach(function() {
        result = simple_function(2, 3);
      });

      it('the result of invoking the original function is returned', function() {
        expect(result).to.eql(5);
      });
    });

    describe('without all of the arguments it needs', function() {
      let result;

      beforeEach(function() {
        result = null;
      });

      beforeEach(function() {
        result = simple_function(2);
      });

      it('returns a function that is waiting for the remaining arguments', function() {
        expect(is_function(result)).to.be.true;
      });

      it('returned function evaluates when the final arguments are provided', function() {
        expect(result(3)).to.eql(5);
      });
    });
  });
});
