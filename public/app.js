var list = document.getElementById("list")
// console.log(firebase)

firebase.database().ref('todo').on('child_added',function(data){
  console.log(data.val())
})

function addTodo(){
  var todo_items =document.getElementById("todo-item");
  var database =  firebase.database().ref('todos')
  var key = database.push().key;
   var todo={
     value:todo_items.value,
     key:key
   }
   database.child(key).set(todo)

  // li tag
  var li = document.createElement("li")
   var liText = document.createTextNode(todo_items.value)
   li.appendChild(liText);


// Delete button

var delBtn = document.createElement("button")
var delText =document.createTextNode("X")
delBtn.appendChild(delText)
delBtn.setAttribute("onclick","deleteItem(this)")


// Edit button

var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.appendChild(editText)
editBtn.setAttribute("onclick","editItem(this)")


li.appendChild(editBtn)
li.appendChild(delBtn)

   list.appendChild(li);
   todo_items.value =""

}

function deleteItem(e)
{
  e.parentNode.remove()
}

function deleteALL()
{
  list.innerHTML =""
}

// Edited value

function editItem(e)
{
 var val = e.parentNode.firstChild.nodeValue;
 var editValue = prompt("Update your value:",val)
 e.parentNode.firstChild.nodeValue = editValue;
// var text = document.getElementById("todo-item").value=val;

function remove(){
  text.innerHTML=""
}

}