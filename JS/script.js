var arr = [];
var loggedIn = {};
var auth = null;

class User {
  constructor(username, password, fname, lname) {
    this.username = username;
    this.password = password;
    this.fname = fname;
    this.lname = lname;
    this.logged_In = false;
  }
}

function register() {
  var username = document.getElementById("username_r").value;
  var password = document.getElementById("password_r").value;
  var fname = document.getElementById("fname_r").value;
  var lname = document.getElementById("lname_r").value;
  var exists = false;

  arr.push(new User(username, password, fname, lname));
  console.log(arr);
}
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var exists = false;
  var index = null;
  for (i in arr) {
    if (arr[i].username == username) {
      exists = true;
      index = i;
    } else {
      alert("Username not found");
    }
    if (arr[index].username == username && arr[index].password == password) {
      arr[index].logged_In = true;
      loggedIn = arr[index];
      console.log(arr[index].username + ", " + arr[index].logged_In);
    } else {
      console.log("Invalid username or password");
    }
  }
}
