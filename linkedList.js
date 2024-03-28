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
        else{
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
    update_Head_Tail(){
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
    pop(){
        if(this.size == 0){
            return null;
        }
        let current = this.head;
        while(current){
            if(current.nextNode.nextNode == null){
                current.nextNode = null;
                this.tail = current;
                this.size -= 1;
                break;
            }
            else{
                current = current.nextNode;
            }
            
        }
    }
    contains(value){
        let current = this.head;
        while(current){
            if(current.value == value){
                return true;
            }
            else{
                current = current.nextNode;
            }
            
        }
        return false;
    }
    find(value){
        let index = 0;
        let current = this.head;
        while(current){
            if(current.value == value){
                return index;
            }
            else{
                current = current.nextNode;
                index++;
            }
            
        }
        return null;
    }
    toString(){
        let finalString = "";
        let current = this.head;
        while(current){
            finalString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        finalString += `${null}`;
        return finalString;
    }
    removeAt(index){
        if(index == 0){
            let next = this.head.nextNode;
            this.head = next;
            this.size -= 1;
            this.head = next;
        }
        else{
            if(index < 0){
                index = this.size -   (-1 * index);
            }
            if((index) >= this.size || index < 0){
                return "out of range"
            }
            let current = this.head;
            let previos = null;
            let next = null;
            while(index>0){
                previos = current;
                current = current.nextNode;
                next = current.nextNode;
                index--;
            }
            previos.nextNode = next;
            this.size -= 1;
            this.update_Head_Tail();
        }
    }
    insertAt(value, index){
        if(index == 0){
            let current = this.head;
            this.head = new Node(value, current);
            this.size++;
        }
            else{
                
            if(index < 0){
                index = this.size - (-1 * index);
            }
            console.log(index, this.size);
            if(index >= this.size || index < 0){
                console.log("out of range"); 
                
            }
            else{
                let current = this.head;
                let previos = null;
                while(index>0){
                    previos = current;
                    current = current.nextNode;
                    index -= 1;
                }
                previos.nextNode = new Node(value, current);
                this.size++;
            }
        }
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

linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
linkedList.append(7);
linkedList.prepend(1);
linkedList.append(28);

console.log(linkedList.toString());
