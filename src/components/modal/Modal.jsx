import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
    Backdrop, 
    ModalContent,
    ModalPhoneBook
 } from './Modal.styled'
 
 const modalRoot = document.querySelector('#modal-root');

function Modal (props) {
  useEffect(()=> {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if(e.code === 'Escape'){
      props.onClose();
    }
  };

  const handleBackdropClick = event =>{
   if(event.currentTarget === event.target){
     props.onClose();
   }
  };
     return createPortal(
       <Backdrop onClick={handleBackdropClick}>
         <ModalContent>
           <ModalPhoneBook>{props.children}</ModalPhoneBook>
         </ModalContent>
       </Backdrop>, 
       modalRoot,
     );
 }

 export default Modal;