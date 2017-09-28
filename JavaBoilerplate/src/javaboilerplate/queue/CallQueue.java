package javaboilerplate.queue;

/**
 *
 * @author Vaibhav Ajay Gupta
 */
public class CallQueue {
    Queue newQueue;
    
    public void main(){
        newQueue = new Queue();
        
        newQueue.enqueue("Hii");
        newQueue.enqueue("This is a queue data structure");
        newQueue.enqueue('A');
        newQueue.enqueue("3");
        System.out.println(newQueue); //Hii This is a queue data structure A 3 
        
        System.out.println(newQueue.dequeue()); // Removes the first element as it's FIFO i.e Hii
        System.out.println(newQueue); //This is a queue data structure A 3
    }
    
}
