'use strict'

var root;
// function(Constructor) for a class node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 0;
}

// function to insert a value in aAVL balanced binary search tree
function insertValue(node, data) {

    if (node == undefined || node == null) {
        node = new Node(data);
    } else {
        if (data < node.data) {
            node.left = insertValue(node.left, data);
        }
        else {
            node.right = insertValue(node.right, data);
        }
        node = checkHeavy(node);
    }

    return node;
}

// function create AVL balanced binary search tree from an array
function createAVL() {
    root = null;
    var inputArray = document.getElementById("inputArray").value.split(",");
    for (let i = 0; i < inputArray.length; i++) { // convert sstring array to number array
        inputArray[i] = parseInt(inputArray[i]);
    }

    // Create a root node and tree
    for (let value of inputArray) {
        root = insertValue(root, value);
    }

    document.getElementById("onorderTraverse").innerText = inorderTraversal(root, []);
    document.getElementById("preOrderTraverse").innerText = preOrderTraversal(root, []);
}

// function to calculate whether node is right heavy (+2),left heavy(-2), neutral(1,0,-1)
function calculateHeavy(node) {
    let rh, lh; // heights of left and right tree
    if (node.left === undefined || node.left === null) {
        lh = -1;
    }
    else {
        lh = node.left.height;
    }

    if (node.right == undefined || node.right == null) {
        rh = -1;
    }
    else {
        rh = node.right.height;
    }

    let diff = rh - lh; // Difference in height
    let heavy;
    if(diff>=-1&&diff<=1){
        heavy = "neutral";
    }else if(rh > lh)
    {
        heavy = "right";
    }
    else{
        heavy = "left";
    }
    return heavy;
}

// function to calculate whether node is right heavy (+1),left heavy(-1), neutral(0)
function calculateHeavySmall(node) {
    let rh, lh; // heights of left and right tree
    if (node.left === undefined || node.left === null) {
        lh = -1;
    }
    else {
        lh = node.left.height;
    }

    if (node.right == undefined || node.right == null) {
        rh = -1;
    }
    else {
        rh = node.right.height;
    }

    let diff = rh - lh; // Difference in height
    let heavy;
    if(rh==lh){
        heavy = "neutral";
    }else if(rh > lh)
    {
        heavy = "right";
    }
    else{
        heavy = "left";
    }
    return heavy;
}

//  function to check heavy
function checkHeavy(node) {
    let heavy = calculateHeavy(node);
    if (heavy==="left") { // left heavy
        if (calculateHeavySmall(node.left)==="right") // zigzag
        {
            node.left = leftRotate(node.left);
            node = rightRotate(node);
        }
        else // ie. node is double left heavy in straight line
        {
            node = rightRotate(node);
        }
    }
    else if(heavy==="right"){ // right heavy
        if (calculateHeavySmall(node.right)==="left") // i.e zigzag
        {
            node.right = rightRotate(node.right);
            node = leftRotate(node);

        }
        else { // i.e node is double right heavy in straight line
            node = leftRotate(node);
        }
    }
    else{
        node.height=findHeight(node);
    }   
    return node;
}



// function for left rotate
function leftRotate(node) {

    let tempNode = node.right;
    node.right = node.right.left;
    tempNode.left = node;

    if (tempNode.left != undefined || tempNode.left != null)
        tempNode.left.height = findHeight(tempNode.left);

    tempNode.height = findHeight(tempNode);
    return tempNode;
}

// function for right rotate
function rightRotate(node) {

    let tempNode = node.left;
    node.left = node.left.right;
    tempNode.right = node;

    if (tempNode.right != undefined || tempNode.right != null)
        tempNode.right.height = findHeight(tempNode.right);

    tempNode.height = findHeight(tempNode);
    return tempNode;
}

// function to find height of node
function findHeight(node) {

    let rh, lh; // heights of left and right tree
    if (node.left === undefined || node.left === null) {
        lh = -1;
    }
    else {
        lh = node.left.height;
    }

    if (node.right === undefined || node.right === null) {
        rh = -1;
    }
    else {
        rh = node.right.height;
    }

    return Math.max(lh, rh) + 1;

}

//function for inorder traversal of tree
function inorderTraversal(node, traversedArray) {
    if (node != null) {
        traversedArray = inorderTraversal(node.left, traversedArray);
        traversedArray.push(node.data);
        traversedArray = inorderTraversal(node.right, traversedArray);
    }
    return traversedArray;
}

//function for preorder traversal of tree
function preOrderTraversal(node, traversedArray) {
    if (node != null) {
        traversedArray.push(node.data);
        traversedArray = preOrderTraversal(node.left, traversedArray);
        traversedArray = preOrderTraversal(node.right, traversedArray);
    }
    return traversedArray;
}


// function to insert number through UI
function insertNumberUI() {
    let inputArray = document.getElementById("insertNumber").value.split(",");
    for (let i = 0; i < inputArray.length; i++) { // convert sstring array to number array
        inputArray[i] = parseInt(inputArray[i]);
        root = insertValue(root, inputArray[i]);
    }

    document.getElementById("insertedBST").innerText = inorderTraversal(root, []);
    document.getElementById("insertpreOrderTraverse").innerText = preOrderTraversal(root, []);
}

// function to sort in asecending order
function sort() {
    document.getElementById("sortedArray").innerText = inorderTraversal(root, []);
}

// function to find the minimum value of BST throught UI
function findMinUI() {
    let value = findMin(root).data;
    document.getElementById("minValue").innerText = value;
}

// function to find the minimum value of BST
function findMin(node) {
    if (node.left == undefined || node.left == null) {
        return node;
    }
    else {
        return findMin(node.left);
    }
}

// function to find the maximum value of BST throught UI
function findMaxUI() {
    let value = findMax(root).data;
    document.getElementById("maxValue").innerText = value;
}

// functoin to find the max value of BST
function findMax(node) {
    if (node.right == undefined || node.right == null) {
        return node;
    }
    else {
        return findMax(node.right);
    }
}

// function to delete a value through UI
function deleteValueUI() {
    let value = parseInt(document.getElementById("deleteValue").value);
    root = deleteValue(root, value);
    document.getElementById("afterDelete").innerText = inorderTraversal(root, []);
}

//function to delete a value
function deleteValue(node, value) {
    if (node != undefined || node != null) {
        if (value === node.data) {
            if ((node.left === undefined || node.left === null) && (node.right === undefined || node.right === null)) { // leaf node
                node = null;
            } else if (node.left != undefined && node.left != null) {
                node.data = findMax(node.left).data;
                node.left = deleteValue(node.left, node.data);
            }
            else {
                node.data = findMin(node.right).data;
                node.right = deleteValue(node.right, node.data);
            }

        } else if (value > node.data) {
            node.right = deleteValue(node.right, value);
        }
        else {
            node.left = deleteValue(node.left, value);
        }
    }
    return node;
}

// function to find inorder successor and predecessor UI
function findInsucPreUI() {
    let value = parseInt(document.getElementById("findInsucPre").value);
    let inPreSuc = findInsucPre(root, value, []);
    document.getElementById("afterInsuc").innerText = inPreSuc["suc"];
    document.getElementById("afterInPre").innerText = inPreSuc["pre"];

}

function findInsucPre(node, value, parentValue) {
    if (node != undefined || node != null) {
        if (value === node.data) {
            if ((node.left === undefined || node.left === null) && (node.right === undefined || node.right === null)) { // leaf node

            } else if (node.left == undefined && node.left == null) {
                parentValue["suc"] = findMin(node.right).data;
            }
            else if (node.right == undefined && node.right == null) {
                parentValue["pre"] = findMax(node.left).data;
            }
            else {
                parentValue["pre"] = findMin(node.right).data;
                parentValue["suc"] = findMax(node.left).data;
            }

        } else if (value > node.data) {
            parentValue["pre"] = node.data;
            parentValue = findInsucPre(node.right, value, parentValue);
        }
        else {
            parentValue["suc"] = node.data;
            parentValue = findInsucPre(node.left, value, parentValue);
        }
    }
    return parentValue;
}

//12, 10, 7, 11, 3, 2, 4, 8, 9