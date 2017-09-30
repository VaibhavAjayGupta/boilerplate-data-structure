
package javaboilerplate.queue;

import java.util.ArrayList;

/**
 *
 * @author Vaibhav Ajay Gupta
 */
public class Queue {
    private ArrayList arrList;
    
    
    public Queue(){
        arrList = new ArrayList();
    }
    
    public void enqueue(Object value){
        arrList.add(value);
    }
    
    public Object dequeue(){
        return arrList.remove(0);
    }
    public String toString(){
        String value = "";
        for(int i=0;i<arrList.size();i++){
            value +=arrList.get(i)+ " ";
        }
        return value;
    }
}


