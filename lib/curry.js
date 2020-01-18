/**
 * This function is used to build a [curried function](https://en.wikipedia.org/wiki/Currying)
 * @param {function} fn a function to curry
 * @param {any} args arguments for the function
 * @returns {any} If all arguments to the original function are provided, it will
 * return the result of running the original function, otherwise it will return a
 * function that is waiting to be called with the missing arguments.
 * @example
 * const add_2_numbers = curry((first, second) => first + second);
 *
 * const add_5_to_a_number = add_2_numbers(5)
 *
 * console.log(add_5_to_a_number(10))
 */
const curry = (fn, ...args) =>
  fn.length <= args.length ? fn(...args) : (...more) => curry(fn, ...args, ...more);

export default curry;
