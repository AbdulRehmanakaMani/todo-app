var listOfTodo = [];

function Add() {
    var toAdd = prompt("Enter Your Todo");
    listOfTodo.push(toAdd);
    for (var i = 0; i < listOfTodo.length; i++) {
        console.log(listOfTodo[i]);
    }
}

function Update() {
    var indexNumber = prompt("At Which Index you want to change");
    if (indexNumber > listOfTodo.length) { alert("Index Dont Exist"); }
    else{
    var update = prompt("Update your Todo");
    listOfTodo[indexNumber] = update;}
}

function Delete() {
    var toDelete = parseInt(prompt("Type the Index You wants to Delete"));
    if (toDelete > listOfTodo.length) {
        alert("Not Exist");
    }
    else {
        listOfTodo.splice(toDelete, 1);
    }
}

function showList() {
    console.log(listOfTodo);
}