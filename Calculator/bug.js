var bug = getElement("bug");
var timer = 1;
var x, y;
function tik() {

  if (Math.floor(Math.random() * 3) == 1) {
    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    bug.style.left = x + "px";
    bug.style.top = y + "px";
  }
}
