const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalSubmit = document.getElementById('modalSubmit');


modalSubmit.addEventListener('click', ()=>{
  // should take in all values from the input and select elements
  // and pass them onto the newtask.js module
  modal.style.display = 'none';
})

function showModal() {
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log("clicked!");
  }
};

export { showModal, modalContent};
