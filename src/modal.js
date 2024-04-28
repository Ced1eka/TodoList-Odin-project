const modal = document.querySelector(".modal");
 const modalContent = document.querySelector(".modal-content");


function showModal() {
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log("clicked!");
  }
};
export {showModal, modalContent}