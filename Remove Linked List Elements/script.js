// Given the head of a linked list and an integer val, 
// remove all the nodes of the linked list that has Node.val == val, 
// and return the new head.

// example
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

var removeElements = function(head, val) {
    if (!head) return null;
    
     // for all duplicates in list 
    while (head && head.val === val)  {
        head = head.next;
    }
    var current = head;
    var prev = head;
    while(current){
        if(current.val==val){
            prev.next=current.next;
        }
        else{
            prev=current;
        }
        current=current.next;
    }
    return head
};
