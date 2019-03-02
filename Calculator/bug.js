var bug = getElement("bug");
var timer = 1;
var x, y;
function tik() {

  if (Math.floor(Math.random() * 2) == 1) {
    x = Math.floor(Math.random() * 1000);
    y = Math.floor(Math.random() * 500);
    bug.style.left = x + "px";
    bug.style.top = y + "px";
  }
}
