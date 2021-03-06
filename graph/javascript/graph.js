'use strict'

var currentGraph;
// function(Constructor) to create a graph with n vertices no vertex is connected to other : This is a adjacency lsit representation
function Graph(vertexNames) {
    this.numVertices = vertexNames.length;
    this.vertices = [];
    for (let i = 0; i < vertexNames.length; i++) {
        this.vertices[vertexNames[i]] = [];
    }
}

// UI function to initialize a graph
function createGraphUI() {
    var vertexNames = document.getElementById("numV").value.split(",");
    currentGraph = new Graph(vertexNames);
    showGraph();
}

// UI function to insert an edge between vertices
function addEdgeUI() {

    var vertices = document.getElementById("edgeV").value.split(",");
    addEdge(vertices[0], vertices[1]);
    document.getElementById("edgeV").value = "";
    showGraph();
}

// function to add an edge between vertices v1 and v2
function addEdge(v1, v2) {

    // add an edge from v1 to v2 and also from v2 to v1 as this is a undirected graph
    if (currentGraph.vertices[v1] == undefined || currentGraph.vertices[v2] == undefined) {
        alert("Entered vertex not present");
    } else {
        if (currentGraph.vertices[v1].indexOf(v2) < 0) {
            currentGraph.vertices[v1].push(v2);
            currentGraph.vertices[v2].push(v1);
        }
    }

}

// UI function to show graph
function showGraph() {
    let result = "<br/><br/>";
    let temp = Object.keys(currentGraph.vertices); // get the vertices names
    for (let i = 0; i < currentGraph.numVertices; i++) {

        result = result + "Adjacency List of vertex " + temp[i] + "<br/>";

        for (let edge of currentGraph.vertices[temp[i]]) {
            result = result + edge + "   ";
        }

        result = result + "<br/><br/>";
    }

    document.getElementById("graphRep").innerHTML = result;
}