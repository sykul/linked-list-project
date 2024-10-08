import { LinkedList } from "./LinkedList.js";

const myLinkedList = new LinkedList("initial value");
myLinkedList.append("new1");
myLinkedList.append("new2");
console.log("myLinkedList.head.next: ");
console.log(myLinkedList.head.next);
console.log("myLinkedList:");
console.log(myLinkedList);
