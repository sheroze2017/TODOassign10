function add(){
    var input=document.getElementById("todo-item")
    var li=document.createElement('li')
    var lit=document.createTextNode(input.value)
    li.appendChild(lit)
// delete btn
    var delb=document.createElement('button')
    var delt=document.createTextNode("DELETE")
    delb.setAttribute("class","add")
    delb.setAttribute("onclick","deleteItem(this)")
    delb.appendChild(delt)

// edit btn
    var edbtn=document.createElement('button')
    var edt=document.createTextNode("EDIT")
    edbtn.setAttribute("class","add")
    edbtn.setAttribute("onclick","edit(this)")


    edbtn.appendChild(edt)
    li.appendChild(edbtn)
    li.appendChild(delb)
    list.appendChild(li)
    input.value=""
    console.log(li)

}

var list=document.getElementById("list")

function deleteItem(e){
    e.parentNode.remove()
}

function deleteALL(){
    list.innerHTML=""
}

function edit(e){
  var val=  e.parentNode.firstChild;
  var editval=prompt("Enter the updated value!",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue=editval
}