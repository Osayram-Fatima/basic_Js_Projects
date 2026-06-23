let input = document.querySelector("#task-input");
let addButton = document.querySelector("#add-task-btn");
let taskList = document.querySelector("#task-list");

function createTask(text) {
    if(text==""){
        alert("write proper task")
    }
    else
    {
    const newli = document.createElement("li");

  const newcheck = document.createElement("input");
  newcheck.type = "checkbox";
  newcheck.className = "task-checkbox";
  newcheck.addEventListener("click", (e) => {
    if(newcheck.checked==true){
     newspan.classList.add() ="completed"   
    }
    else{
        newspan.classList.remove("completed");
    }
})


  const newspan = document.createElement("span");
  newspan.className = "task-text";
  
  const deleteButton = document.createElement("button")
  deleteButton.addEventListener("click",(e)=>{
    deleteButton.parentElement.remove()
  });
  deleteButton.className = "delete-btn";

  newspan.textContent = text;
  deleteButton.textContent = "Delete";

  newli.appendChild(newcheck);
  newli.appendChild(newspan);
  newli.appendChild(deleteButton);
  taskList.appendChild(newli);
  input.value=""
    }
}

addButton.addEventListener("click", (e) => {
  let text = input.value;
  createTask(text);
});
