"use strict"

function createHeap(){ // Parent is (i)th element, (2i)th is left child & (2i+1)th is right child
    var inputArray = document.getElementById("arrayInput").value.split(",");
    inputArray.unshift(0); // shift all the elements by 1
    for(let i=1;i<inputArray.length;i++){
        inputArray[i]=parseInt(inputArray[i]);
    }
    buildMinHeap(inputArray);
    console.log(inputArray);

}

// define build min heap here
function buildMinHeap(inputArray){
    
    for(let i=parseInt((inputArray.length-1)/2);i>=1;i--){ //length-1 because number of elements are 1 less
        minHeapifyDown(inputArray,i)
    }

}

// define min heapify function here while moving down
function minHeapifyDown(inputArray,position){ 
    if(inputArray[2*position+1]!= undefined || inputArray[2*position+1]!= null){
        if(inputArray[position]>inputArray[2*position+1]||inputArray[position]>inputArray[2*position]){ // Check if parent is greater than any child
            if(inputArray[2*position+1]<inputArray[2*position]){ // replace right child with parent as right child is smallest
                let temp = inputArray[2*position+1];
                inputArray[2*position+1] = inputArray[position];
                inputArray[position]=temp;
                minHeapifyDown(inputArray,2*position+1);
            }
            else // replace left child with parent as left child is smallest
            {
                let temp = inputArray[2*position];
                inputArray[2*position] = inputArray[position];
                inputArray[position]=temp;
                minHeapifyDown(inputArray,2*position);
            }
        }
    }
    else
    {
        if(inputArray[2*position]<inputArray[position]){ // check and replace left child with parent only
            let temp = inputArray[2*position];
            inputArray[2*position] = inputArray[position];
            inputArray[position]=temp;
            minHeapifyDown(2*position);
        }
    }
}
