package javaboilerplate.heap;

import java.util.ArrayList;


/**
 *
 *@author Vaibhav Ajay Gupta
 */
public class MaxBinaryHeap {
    
    private ArrayList<Integer> heapTree = new ArrayList(); // Max Heapified Array visualized as a tree.
    private int heapSize; // HeapSize 
    
    public MaxBinaryHeap(ArrayList<Integer> unsortedArray){
        heapTree.add(0);
        heapTree.addAll(unsortedArray);
        heapSize = unsortedArray.size();
        build_max_heap();
        
    }
    
    @SuppressWarnings("ReturnOfCollectionOrArrayField")
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
                        newPosition = 2*position;
                        arrList.set(newPosition, temp);
                        
                    }
            }
  
        }
        
        if(newPosition!=position){
            arrList=max_heapify_down(arrList,newPosition);
        }
        
        return arrList;
    }
    
    //function to coorect one voilation of max heap property moving from particular index towards the root
    ArrayList<Integer> max_heapify_up(ArrayList<Integer> arrList,int position){
        
        if(position>1&&arrList.get(position)>arrList.get(position/2)) //if child is greater than parent
        {
            int temp = arrList.get(position); 
            arrList.set(position, arrList.get(position/2));
            arrList.set(position/2, temp);
            arrList=max_heapify_up(arrList,position/2);
        }
        
        
        return arrList;
    }
    
    //function to insert a new value
    public void insert_max_heap(int value){
        this.heapTree.add(value);
        this.heapSize+=1;
        this.heapTree=max_heapify_up(this.heapTree,this.heapSize);
    }
    
    //function to delete a particular position
    public void deleteKey_max_heap(int key){ // Swap the value of key with the last value of tree and delete the last value
        
        this.heapTree.set(key, this.heapTree.get(this.heapSize)); // Replaced the key with last value
        this.heapTree.remove(this.heapSize);
        this.heapSize-=1;
        this.heapTree=max_heapify_down(this.heapTree,key);
    }
    
    //function to delete a particular value
    public void deleteValue_max_heap(int value){ // Swap the value of key with the last value of tree and delete the last value
        
        int key = findKey_max_heap(1,value); // find the key of value
        deleteKey_max_heap(key);
    }
    
    
    //function to find a key of particular value
    public int findKey_max_heap(int key,int value){ // Swap the value of key with the last value of tree and delete the last value
        
        if(value>this.heapTree.get(key))
            return -1;
        else if(value==this.heapTree.get(key))
            return key;
        else
        {
            int tempKey = findKey_max_heap(2*key,value); // check in left subtree
            if(tempKey>0)
            {
                key = tempKey;
            }
            else
            {
                key = findKey_max_heap(2*key+1,value); // check in right subTree
            }
        }
        
        return key;
    }
    
    
    //function to extract max value
    public int extractMax_maxHeap(){
           int max = this.heapTree.get(1);
           deleteKey_max_heap(1);
           return max;
           
    }
    
    //function to return max value
    public int getMax_maxHeap(){
        int max = this.heapTree.get(1);
        return max;
    }
    
    //function to return a sorted array  desending order
    public ArrayList<Integer> get_sortedMaxHeap(){
        ArrayList<Integer> sortedList= new ArrayList<>();
        
        int sortedListLength = this.heapSize;
        for(int i=0;i<sortedListLength;i++)
        {
            sortedList.add(extractMax_maxHeap());
        }
        return sortedList;
    }
    
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
