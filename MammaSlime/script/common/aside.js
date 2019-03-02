var aside = document.getElementById('aside')
function toggleAside() {
  if(aside.classList.length == 1) {
    aside.classList.add('aside_active')
  } else {
    aside.classList.remove('aside_active')
  }
}
