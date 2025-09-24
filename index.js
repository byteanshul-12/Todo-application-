let index = 1;
let alertvalue = document.querySelector("#holder")
let popvalue = alertvalue.value
function addtodo(){
    const inputvalue = document.getElementById('holder')
    const value = inputvalue.value
    if (value === "")
        return;
    
    //giving the access to the enter key to add todo 
    const keyaccess = document.querySelector('#holder')
    keyaccess.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            addtodo()
        }
    })
    //creating a div parent to add all Todo with checkbox and delete button
    const divel1 = document.createElement('div')
    divel1.id = "Todo-" + index;
    divel1.className = 'divparent'
 
    
    


    //creating a list tag to append value of the Todo
    const list = document.createElement('li')
    list.className = "listtag"
    
    divel1.appendChild(list)


    //creating a input tag to add a checkbox in front of the Todo
    const inputel2 = document.createElement('input')
    inputel2.type = "checkbox";
    inputel2.className = "check";
    list.appendChild(inputel2)

    //creating a span button for the value 
    const span = document.createElement('span')
    span.id = "valueholder"
    span.innerHTML = `${value}`
    list.appendChild(span)
   
    
    //creating button  element to append  a delete button 
    const button1 = document.createElement('button');
    button1.id = "deletebuttonholder"
    button1.innerHTML = "Delete"
    button1.addEventListener('click',() => deletetodo(divel1.id))
    index = index + 1;
    
    list.appendChild(button1)
    console.log(value)
    inputvalue.value = '';

    //append the parent divel1 to the body 
    document.querySelector('#listholder').appendChild(divel1)


function deletetodo(index){
    const element = document.getElementById(index)
    element.parentNode.removeChild(element);
    console.log("function is getting called on clicking the button")


}

  document.getElementById('listholder').addEventListener('change', function (e) {
      if (e.target.classList.contains('check')) {
        const text = e.target.nextElementSibling.textContent;
        if (e.target.checked) {
            console.log(popvalue)
          alert(`This Todo is completed: ${text}`);
         }else {
          console.log(`This Todo is not completed: ${text}`);
        }
      }
    })}