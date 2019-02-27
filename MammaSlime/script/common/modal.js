var modal = document.getElementById('modal')
console.log(modal)
function toggleModal() {
  if(modal.classList.length == 1) {
    modal.classList.add('modal_active')
  } else {
    modal.classList.remove('modal_active')
  }
}
