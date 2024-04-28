import './style.css';
import imageSrc from './userProfile.png';
import * as srcModal from './modal.js';


const btn =document.querySelector('.add-new-todo');
btn.addEventListener('click',()=>{
      console.log('yo beeee')
      srcModal.showModal();
  srcModal.modalContent.show()

})

img.src = imageSrc;
