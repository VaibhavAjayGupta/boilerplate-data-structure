package javaboilerplate.stack;

/**
 *
 * @author Vaibhav Ajay Gupta
 */
public class CallStack {
    
    public void main(){
        Stack newStack = new Stack();
        
        newStack.push("Hii");
        newStack.push(2);
        newStack.push("Stack is working awesome");
        newStack.push(4);
        System.out.println(newStack); // Hii 2 Stack is working awesome 4 
        System.out.println(newStack.pop()); // 4
        System.out.println(newStack); // Hii 2 Stack is working awesome
        System.out.println(newStack.peak()); // Stack is working awesome
    }
}
