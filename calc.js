function input(val) {
  v = document.getElementById("display");
  v.value += val;
}
function erase() {
  v.value = "";
}

function del() {
  v.value = v.value.toString().slice(0, -1);
}

function res() {
  v.value = eval(v.value);
}
