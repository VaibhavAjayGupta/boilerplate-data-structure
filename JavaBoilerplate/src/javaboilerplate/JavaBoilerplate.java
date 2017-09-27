package javaboilerplate;

import java.util.ArrayList;
import java.util.Collections;
import javaboilerplate.heap.MaxBinaryHeap;

/**
 *
 * @author Vaibhav Ajay Gupta
 */
public class JavaBoilerplate {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        ArrayList<Integer> unsortedArray = new ArrayList();        
        
        Collections.addAll(unsortedArray,16,4,10,14,7,9,3,2,8,1);
        
        MaxBinaryHeap heapTree= new MaxBinaryHeap(unsortedArray); // Will create a heapTree from an unsotred array
        
        System.out.println(heapTree); // 16 14 10 8 7 9 3 2 4 1
        heapTree.insert_max_heap(20); 
        System.out.println(heapTree); // 20 16 10 8 14 9 3 2 4 1 7
        heapTree.deleteKey_max_heap(6);
        System.out.println(heapTree); // 20 16 10 8 14 7 3 2 4 1 
        heapTree.deleteValue_max_heap(20);
        System.out.println(heapTree); // 16 14 10 8 1 7 3 2 4
        System.out.println(heapTree.extractMax_maxHeap()); // 16
        System.out.println(heapTree); // 14 8 10 4 1 7 3 2 
        
        // New Heap created for sorted 
        ArrayList<Integer> clonedList =  (ArrayList<Integer>) heapTree.getHeapTree().clone();
        clonedList.remove(0); // remove the first element of zero
        MaxBinaryHeap clonedHeapTree = new MaxBinaryHeap(clonedList);
        ArrayList<Integer> sortedList = clonedHeapTree.get_sortedMaxHeap();
        showList(sortedList); // 14 10 8 7 4 3 2 1
        
    }
    
    static public void showList(ArrayList<Integer> arrList)
    {
        String str = "";
        for(int i=0;i<arrList.size();i++){
            str +=arrList.get(i)+ " ";
        }
        System.out.println(str);
    }
}
