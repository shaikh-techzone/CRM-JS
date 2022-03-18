function uri(str) {
  window.history.pushState(``, ``, `/${str}`);
  loadDoc(str);
}

function updateTitle(str) {
  document.querySelector("title").innerHTML = str;
}

function loadDoc(str) {
  var ajx = new XMLHttpRequest();
  ajx.onload = function () {
    document.querySelector("main").innerHTML =
      this.response.querySelector("content").innerHTML;
    console.log(this.response);
  };
  ajx.open("GET", `/Pages/${str}.html`);
  ajx.responseType = "document";
  ajx.send();
  updateTitle(str);
}
