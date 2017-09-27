/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaboilerplate.heap;

import java.util.ArrayList;


/**
 *
 * @author vaibhav
 */
public class MaxHeap {
    
    private ArrayList<Integer> heapTree = new ArrayList(); // Max Heapified Array visualized as a tree.
    private int heapSize; // HeapSize 
    
    public MaxHeap(ArrayList<Integer> unsortedArray){
        heapTree.add(0);
        heapTree.addAll(unsortedArray);
        heapSize = unsortedArray.size();
        build_max_heap();
        
    }
    
    public ArrayList<Integer> getHeapTree (){
        return this.heapTree;
    }
    
    public int getHeapSize (){
        return this.heapSize;
    }
    
    // function to correct a single voilation of max-heap property i.e parent is smaller than either of it's children while moving down
    ArrayList<Integer> max_heapify_down(ArrayList<Integer> arrList,int position){ // position where the max-heap property is supposed to be voilated
        int newPosition=position,temp;
        if(position<=this.heapSize/2) // As all the node after that are leaves and all leaves are max-heap in itself 
        { 
            int leftChild = arrList.get(2*position);
            
            if(2*position!=this.heapSize) // Check if right child exist or not
            {
                int rightChild = arrList.get(2*position+1);
                if(arrList.get(position)<leftChild||arrList.get(position)<rightChild)
                {
                    if(leftChild>rightChild){
                        temp = arrList.get(position);
                        arrList.set(position, leftChild);
                        newPosition = 2*position;
                        arrList.set(newPosition, temp);
                    }
                    else{
                        temp = arrList.get(position);
                        arrList.set(position, rightChild);
                        newPosition = 2*position+1;
                        arrList.set(newPosition, temp);
                        
                    }
                }
            }
            else // no right child exist
            {
                if(leftChild>arrList.get(position)){
                        temp = arrList.get(position);
                        arrList.set(position, leftChild);
                        arrList.set(leftChild, temp);
                        newPosition = 2*position;
                    }
            }
  
        }
        
        if(newPosition!=position){
            max_heapify_down(arrList,newPosition);
        }
        
        return arrList;
    }
    
    //function to insert a new value
    void insert_max_heap(){
        
    }
    
    //function to extract max value
    void extract_max(){
        
    }
    
    //function to return a sorted array  desending order
    
    //function to build max heap
    private void build_max_heap()
    {
        for(int i=this.heapSize;i>=1;i--){
            heapTree=max_heapify_down(this.heapTree,i);
        }
    }
    
    
    
    @Override
    public String toString(){ // to display the heapTree visualized as an array
        String value = "";
        for(int i=1;i<this.heapSize+1;i++){
            value +=heapTree.get(i)+ " ";
        }
        return value;
    }
}
