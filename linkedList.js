console.log("Working...");
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    append(value){
        if(this.size == 0){
            this.head = new Node(value, null);
            this.size ++;
        }
        let current = this.head;
        while(current){
            if(current.nextNode == null){
                current.nextNode = new Node(value, null);
                this.tail = current.nextNode;
                this.size++;
                break;
            }
            else{
                current = current.nextNode;
            }
            
        }
    }
    prepend(value){
        this.head = new Node(value, this.head);
        this.size++;
        //-----------
        let current = this.head;
        while(current){
            
            if(current.nextNode == null){
                this.tail = current;
                break;
            }
            else{
                current = current.nextNode;
            }
        }
    }
    at(index){
        if(index < 0){
            index = this.size -   (-1 * index);
        }
        if((index) >= this.size || index < 0){
            return "out of range"
        }
        let current = this.head;
        while(index>0){
            current = current.nextNode;
            index--;
        }
        return current.value;
    }
    //TODO  removes the last element from the list
    pop(){

    }
    //TODO  returns true if the passed in value is in the list and otherwise returns false.
    contains(value){

    }

    //TODO  returns the index of the node containing value, or null if not found.
    find(value){

    }
    //TODO represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
    //TODO The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString(){

    }
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.nextNode;
        }
    }

}
class Node{
    constructor(value = null, nextN = null){
        this.value = value;
        this.nextNode = nextN;
    }
}
let linkedList = new LinkedList;

linkedList.prepend(5);
linkedList.prepend(2);
linkedList.append(15);

linkedList.printListData();
console.log("size:", linkedList.size);
console.log("head:", linkedList.head.value);
console.log("tail:", linkedList.tail.value);
console.log("valueInIndex:",linkedList.at(0));
