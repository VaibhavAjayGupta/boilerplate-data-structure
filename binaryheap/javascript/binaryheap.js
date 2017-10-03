"use strict"
var inputArray;
function createHeap() { // Parent is (i)th element, (2i)th is left child & (2i+1)th is right child
    inputArray = document.getElementById("arrayInput").value.split(",");
    inputArray.unshift(0); // shift all the elements by 1
    for (let i = 1; i < inputArray.length; i++) {
        inputArray[i] = parseInt(inputArray[i]);
    }
    buildMinHeap(inputArray);
    console.log(inputArray);
}

// define build min heap here
function buildMinHeap(inputArray) {
    for (let i = parseInt((inputArray.length - 1) / 2); i >= 1; i--) { //length-1 because number of elements are 1 less
        minHeapifyDown(inputArray, i)
    }
    let outputArray = inputArray.slice(1);
    document.getElementById("createdHeap").innerText = outputArray;
}

// define min heapify function here while moving down
function minHeapifyDown(inputArray, position) {
    if (position != 0) {
        if (inputArray[2 * position + 1] != undefined || inputArray[2 * position + 1] != null) {
            if (inputArray[position] > inputArray[2 * position + 1] || inputArray[position] > inputArray[2 * position]) { // Check if parent is greater than any child
                if (inputArray[2 * position + 1] < inputArray[2 * position]) { // replace right child with parent as right child is smallest
                    let temp = inputArray[2 * position + 1];
                    inputArray[2 * position + 1] = inputArray[position];
                    inputArray[position] = temp;
                    minHeapifyDown(inputArray, 2 * position + 1);
                }
                else // replace left child with parent as left child is smallest
                {
                    let temp = inputArray[2 * position];
                    inputArray[2 * position] = inputArray[position];
                    inputArray[position] = temp;
                    minHeapifyDown(inputArray, 2 * position);
                }
            }
        }
        else {
            if (inputArray[2 * position] < inputArray[position]) { // check and replace left child with parent only
                let temp = inputArray[2 * position];
                inputArray[2 * position] = inputArray[position];
                inputArray[position] = temp;
                minHeapifyDown(2 * position);
            }
        }
    }
}

// define min heapify function here while moving up
function minHeapifyUp(inputArray, position) {
    if (position != 1) {
        if (inputArray[parseInt(position / 2)] > inputArray[position]) {
            let temp = inputArray[position];
            inputArray[position] = inputArray[parseInt(position / 2)];
            inputArray[parseInt(position / 2)] = temp;
            minHeapifyUp(inputArray, parseInt(position / 2));
        }
    }
}
// define function to insert the number
function insertNumber() {
    var numToInsert = parseInt(document.getElementById("insertNumber").value);
    inputArray.push(numToInsert);
    minHeapifyUp(inputArray, inputArray.length - 1);
    let outputArray = inputArray.slice(1);
    document.getElementById("insertedHeap").innerText = outputArray;
}

// define function to find the minimum value
function findMin() {
    let minValue = inputArray[1];
    document.getElementById("minValue").innerText = minValue;
}

// define a function to extract min
function extractMin(){
    let temp = inputArray[inputArray.length-1];
    inputArray[inputArray.length-1]=inputArray[1];
    inputArray[1]=temp;
    temp=inputArray.pop();
    minHeapifyDown(inputArray,1);
    return temp;
}

// define function to return the sorted array
function sort(){
    let sortedArray=[];
    let tempArray = inputArray.slice(0);
    let numberOfElements = inputArray.length;
    for(let i=1;i<numberOfElements;i++){
        sortedArray.push(extractMin());
    }
    document.getElementById("sortedArray").innerText = sortedArray;
    inputArray=tempArray;
}