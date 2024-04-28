import './mainbar.js'

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
const btns = document.querySelectorAll(".add-new-todo");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("yoe");
    showModal();
    modalContent.show();
  });
});
// btn.addEventListener('click',()=>{
//       console.log('yo beeee')
//       showModal();
//   modalContent.show()

// })
export { showModal, modalContent, btns };
