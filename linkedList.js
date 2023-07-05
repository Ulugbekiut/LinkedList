class Node {
    constructor(val){
    this.val=val;
    this.next = null
    }
}

const a = new Node(1)
const b =new Node (2)
const c = new Node(3)
const d = new Node(4)

a.next =b;
b.next =c;
c.next=d;


// const printLinkedList = (head) => {
// let current = head;
//     while(current !== null)
// {
//     console.log("iterative:  " + current.val)
//     current=current.next
//  }

 
// }

 //printLinkedList(a)


// const SumLinkedList = (head) => {
//              let sum = 0;
//         let current = head;

//         while(current !== null) {
//             sum = sum + current.val;
//             current=current.next
            
//         }
       
//         console.log(sum)
// } 


// SumLinkedList(a);


const SumLinkedList = (head) => {
if(head===null) return 0;

return(head.val + SumLinkedList(head.next)) 

}


console.log(SumLinkedList(a))


const containElement = (head, target)=> {
    let current = head;
    if(current===null ) return false
    while (current!==null) {
        if(current.val === target) return true;
        else {
            current= current.next
        }
    }
}

console.log("result : " + containElement(a, 2))

// function getNodeByIndex (head, index){
//     let current = head; 
//     let count=0
//     while (current!==null){
//         if(count=== index){ return current.val}
//         current=current.next
//         count++;
//     }
//     console.log("not found")
// }
// console.log(getNodeByIndex(a, 2))



function getNodeByIndex (head, index){
    if(head ===null) return false;
    if(index===0) return head.val;
    return getNodeByIndex(head.next, index-1)
}

console.log(getNodeByIndex(a,0))


// function reverseLinkedList (head){
//     let current = head;
//     let tail = null;
//     let next ;
//     while(current!==null){
//         next = current.next
//         current.next = tail; 
//         tail=current;
//         current=next;
//     }
// return tail



// }

function reverseLinkedList (head, tail = null){
   
   if(head===null) return tail;
   const next = head.next;
   head.next = tail;
   return reverseLinkedList(next, head)


}

let r =reverseLinkedList(a)

 

console.log(r)