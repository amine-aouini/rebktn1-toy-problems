/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  // take the first element comparet to the second 
  // make the bigger element on the right and the other on the left and so on
  let newArr = array;
  for (let i = 0; i < newArr.length; i++) {
  	if (i < newArr.length-1) {
  		let comparenum1 = newArr[i];
  		let comparenum2 = newArr[i+1];

  		if (comparenum1 < comparenum2) {
  			
  			newArr[i] = comparenum1;
  			newArr[i+1] = comparenum2;
  		}
  		if (comparenum1 > comparenum2) {
  			
  			newArr[i+1] = comparenum1;
  			newArr[i] = comparenum2;
  		}
  	}
  	if (i === newArr.length-1) {
  		let comparenum1 = newArr[i];
  		let comparenum2 = newArr[i-1];
  		if (comparenum1 < comparenum2) {

  			newArr[i-1] = comparenum2;
  			newArr[i] = comparenum1;
  		}
  		if (comparenum1 > comparenum2) {

  			newArr[i] = comparenum1;
  			newArr[i-1] = comparenum2;
  		}
  	}
  }

  return newArr;
};