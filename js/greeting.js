const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");

const HIDDEN_CLSSSNAME = "hidden";
const USERNAME_KEY = "username";

function loginBtnOnClick(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLSSSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //greeting.innerText = "Hello "+username;
  //위에랑 아래랑 기능은 동일. 아래문장이 new way
  paintGreetings(username);
  toDoList.classList.remove(HIDDEN_CLSSSNAME);
  toDoForm.classList.remove(HIDDEN_CLSSSNAME);
  logoutForm.classList.remove(HIDDEN_CLSSSNAME);
}

function logoutBtnOnClick(event){
  localStorage.clear();
  toDoList.classList.add(HIDDEN_CLSSSNAME);
  toDoForm.classList.add(HIDDEN_CLSSSNAME);
  greeting.classList.add(HIDDEN_CLSSSNAME);
}


function paintGreetings(username){
  greeting.innerText =`Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLSSSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLSSSNAME);
  loginForm.addEventListener("submit",loginBtnOnClick);
}else{
  paintGreetings(savedUsername);
  logoutForm.classList.remove(HIDDEN_CLSSSNAME)
  logoutForm.addEventListener("submit",logoutBtnOnClick);
}

