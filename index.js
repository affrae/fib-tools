module.exports = {
  getList,
  getNumber,
  getSequence
}

/**
 * Get a list up to the `nth` integer in the Fibonacci sequence (inclusive).
 *
 * @param {number} nth The number to get a list up to (inclusive)
 * @returns {Array<number>}
 */
function getList(nth) {
  if (nth === 0) return [0]
  return getList(nth - 1).concat(getNumber(nth))
}

/**
 * Get the `nth` integer in the Fibonacci sequence.
 *
 * @param {number} nth A number indicating which number in the sequence to
 * calculate (zero-based)
 * @returns {number}
 */
function getNumber(nth) {
  if (nth === 0) return 0
  if (nth === 1) return 1
  
  return getNumber(nth - 1) + getNumber(nth - 2)
}

/**
 * Get a generator starting with `start` that yields Fibonacci numbers.
 *
 * @generator
 * @param {number} [start=0] A number to start the sequence at
 * @yield {number} The next number in the sequence
 */
function* getSequence(theStart = 0) {
  while (true) yield getNumber(theStart++)
}


function badFunction() {
  
  var upper = 4;
  
  var a = [1,2,3,4,5,6,7,8,9,10];
  
  var regex1 = new RegExp('\\w+');

  
  // zero out everything above index `upper`
  // typo: the loop variable i is decremented
  // instead of incremented,
  // so i is counted downwards from upper+1 to 0, -1, -2 and so on.
             
  for (i=upper+1; i<a.length; --i)
    a[i] = 0;
    
}


