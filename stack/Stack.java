package javaboilerplate.stack;

import java.util.ArrayList;

/**
 *
 * @author Vaibhav Ajay Gupta
 */
public class Stack {
    
    private ArrayList arrList;
    private int size;
    
    public Stack(int size){
        arrList= new ArrayList<>();
        this.size = size;
    }
    
    public Stack(){
        arrList= new ArrayList<>();
        this.size = 0;
    }
    
    public Object pop(){
        if(arrList.size()>0)
          { 
            Object tempObject = arrList.remove(arrList.size()-1);
            return tempObject;
           }
        else
            return false;
}
    
    public boolean push(Object value){
        if(size==0||arrList.size()<size)
        {
            arrList.add(value);
            return true;
        }
        else
            return false;
    }
    
    public Object peak(){
        if(arrList.size()>0)
          { 
            Object tempObject = arrList.get(arrList.size()-1);
            return tempObject;
           }
        else
            return false;
    }
    
    public boolean isEmpty(){
        return arrList.isEmpty();
    }
    
    public String toString(){
        String value = "";
        for(int i=0;i<arrList.size();i++){
            value +=arrList.get(i)+ " ";
        }
        return value;
    }
}
