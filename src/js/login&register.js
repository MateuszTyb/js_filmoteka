//REFS
let userlinks = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
var currentUser = null;
let header = document.getElementById('hh');
// Functions
function getUsername() {
  let keepLoggedIn = localStorage.getItem('keepLoggedIn');
  if (keepLoggedIn == "yes") {
    currentUser = JSON.parse(localStorage.getItem('user'));
  }
  else {
    currentUser = JSON.parse(sessionStorage.getItem('user'));
  }
}
function Signout(){
  localStorage.removeItem('user');
  sessionStorage.removeItem('user');
  localStorage.removeItem('keepLoggedIn');
  window.location = "index.html";
}
//Windows Loads

window.onload = function() {
  getUsername();
  if (currentUser == null) {
    userlinks.innerText = "Utwórz nowe konto";
    userlinks.classList.replace("nav-link", "btn");
    userlinks.classList.add("btn-primary");
    userlinks.href = "register.html";

    signoutlink.innerText = "Zaloguj się";
    signoutlink.classList.replace("nav-link", "btn");
    signoutlink.classList.add("btn-sucess");
    signoutlink.href = "login.html";
  }
  else {
    userlinks.innerText = currentUser.username;
    header.innerText = "Witaj " + currentUser.fullname;
    userlinks.classList.replace("btn", "nav-link" );
    userlinks.classList.remove("btn-primary");
    userlinks.href = "#";

    signoutlink.innerText = "Wyloguj się";
    signoutlink.classList.replace("btn", "nav-link" );
    signoutlink.classList.remove("btn-sucess");
    signoutlink.href = "javascript:Signout()";
  }

};