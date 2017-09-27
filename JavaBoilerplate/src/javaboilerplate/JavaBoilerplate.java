/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaboilerplate;

import java.util.ArrayList;
import java.util.Collections;
import javaboilerplate.heap.MaxHeap;

/**
 *
 * @author vaibhav
 */
public class JavaBoilerplate {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        ArrayList<Integer> unsortedArray = new ArrayList();        
        
        Collections.addAll(unsortedArray,16,4,10,14,7,9,3,2,8,1);
        
        MaxHeap heapTree= new MaxHeap(unsortedArray) ;
        
        System.out.println(heapTree);
        
    }
    
}
