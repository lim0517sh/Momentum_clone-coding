const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos =[];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
///json.stringify() <- 뭐든지 string으로 만들어줌///
///json.parse() <- string을 js가 이해할 수 있는 array로 변환시킴///

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text:newTodo,
    id:Date.now(),
  };
  toDos.push(newToDoObj);
  ///push() <-array에 item을 넣어줌///
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  //위랑 아래랑 기능은 동일
  //parsedToDos.forEach((item)=>console.log("this it the turn of ",item));
  //forEach() <- array 속 각각 item에 대해 function을 실행시킴
  //function arrow(function 짧은 버전) : =>
}

//filter() <- true면 return

if(savedUsername){
  toDoList.classList.remove(HIDDEN_CLSSSNAME);
  toDoForm.classList.remove(HIDDEN_CLSSSNAME);
}