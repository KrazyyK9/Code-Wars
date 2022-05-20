// Implement the method countIf (count_if in PHP and Python), which accepts a linked list (head) and a predicate function, and returns the number of elements which apply to the given predicate.

// For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, countIf / count_if should return 2, since x >= 2 applies to both 2 and 3.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

// Note: the list may be null and can hold any type of value.

// Good luck!

//P: array of values, predicate function. 
//R: Number of elements which apply to the predicate
//E: 1 -> 2 -> 3, and the predicate x => x >= 2, countIf / count_if should return 2
//P: create count varaible, loop through while head is true, run head.data through a function of p, increase count
function countIf(head, p) {
    let count = 0
    
    while (head){
      if(p(head.data)){
        count++
      }
      head = head.next  
    }
    return count
  }