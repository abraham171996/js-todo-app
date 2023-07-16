const detailes = document.querySelector(".detailes");
const addInput = document.querySelector(".addInput");
const addBtn = document.querySelector(".addBtn");
const navItem = document.querySelectorAll(".nav-item");
const firstLi = document.querySelector("#first");
const secondLi = document.querySelector("#second");
const thridLi = document.querySelector("#thrid");
const under = document.createElement("div");
const addDiv = document.querySelector(".add");
const end = document.querySelector(".end");
const allDelet = document.querySelector(".all-delete")
allDelet.style.display = "none"

let todos = [];
getTodosFromLocalStorage();

firstLi.append(under);
under.classList.add("hr");
navItem.forEach((e) => {
  e.addEventListener("click", () => {
    e.append(under);
    addLine();
  });
});

function addLine() {
  under.classList.add("hr");
}

secondLi.addEventListener("click", checkAdd);

function checkAdd() {}

addBtn.addEventListener("click", toDoUi);

window.addEventListener("load", displayTodos);

function displayTodos() {
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const groupOne = document.createElement("div");
    const groupSecond = document.createElement("div");
    li.append(groupOne);
    li.append(groupSecond);
    detailes.append(li);
    groupOne.append(checkbox);
    groupOne.append(label);
    groupOne.classList.add("groupOne");
    li.classList.add("detaile-list");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    const icon = document.createElement("i");
    groupSecond.append(icon);
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash");
    icon.style.display = "none";
    label.textContent = todo.label;
    checkbox.checked = todo.checked;
  
    if (label.textContent === "") {
      li.remove();
    }
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
      
    }
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        label.style.textDecoration = "line-through";
        
      } else {
        label.style.textDecoration = "none";
        ;
        removeDeleteIcon(li);
      }
      updateLocalStorage();
    });

    firstLi.addEventListener("click", () => {
      li.style.display = "flex";
      addDiv.style.display = "flex";
      icon.style.display = "none";
      allDelet.style.display = "none"
    });

    secondLi.addEventListener("click", () => {
      icon.style.display = "none";
      addDiv.style.display = "flex";
      allDelet.style.display = "none"
      if (checkbox.checked) {
        li.style.display = "none";
      }
      if (!checkbox.checked) {
        li.style.display = "flex";
        icon.style.display = "none";
        
      }
    });

    thridLi.addEventListener("click", () => {
      addDivRemove()
      if (!checkbox.checked) {
        li.style.display = "none";
        removeDiv();
        addDiv.style.display = "none"
      }
      if (checkbox.checked) {
        addDiv.style.display = "none"
        li.style.display = "flex";
        createDeleteIcon(li, icon);
        icon.style.display = "block"
        allDelet.style.display = "block"
        
        allDelet.addEventListener("click",()=>{
          
          li.remove()
         
        })
        
      }
      
    });
  });
}

function toDoUi() {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const groupOne = document.createElement("div");
  const groupSecond = document.createElement("div");
  li.append(groupOne);
  li.append(groupSecond);
  detailes.append(li);
  groupOne.append(checkbox);
  groupOne.append(label);
  groupOne.classList.add("groupOne");
  li.classList.add("detaile-list");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  const icon = document.createElement("i");
  groupSecond.append(icon);
  icon.classList.add("fa-solid");
  icon.classList.add("fa-trash");
  icon.style.display = "none"
  allDelet.addEventListener("click",()=>{
    li.remove()
  })
  if (addInput.value.trim() !== "") {
    label.textContent = addInput.value;
  } else {
    li.remove();
    checkbox.remove();
  }

  addInput.value = "";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
      
    } else {
      label.style.textDecoration = "none";
     
      removeDeleteIcon(li);
    }
    updateLocalStorage();
  });

  firstLi.addEventListener("click", () => {
    li.style.display = "flex";
    allDelet.style.display = "none"
  });

  secondLi.addEventListener("click", () => {
    allDelet.style.display = "none"
    if (checkbox.checked) {
      li.style.display = "none";
    }
    if (!checkbox.checked) {
      li.style.display = "flex";
    }
  });


  thridLi.addEventListener("click", () => {
   addDivRemove()
    if (!checkbox.checked) {
      li.style.display = "none";
      removeDiv();
      addDiv.style.display = "none"
    }
    if (checkbox.checked) {
      addDiv.style.display = "none"
      li.style.display = "flex";
      createDeleteIcon(li, icon);
      icon.style.display = "block"
      allDelet.style.display = "block"
      allDelet.addEventListener("click",()=>{
        addDiv.style.display = "none"
        li.remove()
       localStorage.clear()})
      
    }
    
  });;

  todos.push({ label: label.textContent, checked: false });
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromLocalStorage() {
  const storedTodos = localStorage.getItem("todos");
  todos = storedTodos ? JSON.parse(storedTodos) : [];
}

function removeDiv() {
  addDiv.style.display = "none";
}

function createDeleteIcon(li, icon) {
  icon.addEventListener("click", () => {
    li.remove();
    removeTodoFromList(li);
    updateLocalStorage();
  });
}

function removeDeleteIcon(li) {
  const groupSecond = li.querySelector(".groupSecond");
  if (groupSecond) {
    groupSecond.remove();
  }
}

function removeTodoFromList(li) {
  const label = li.querySelector("label");
  const labelText = label.textContent;
  todos = todos.filter((todo) => todo.label !== labelText);
}

function addDivRemove(){
  addDiv.style.display = "none"
  allDelet.style.display = "block"
}
function addDivAdd(){
  addDiv.style.display = "flex"
  allDelet.style.display = "none"
}
firstLi.addEventListener("click",addDivAdd)
secondLi.addEventListener("click",addDivAdd)
thridLi.addEventListener("click",addDivRemove)
