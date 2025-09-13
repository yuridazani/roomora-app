import React, { createContext, useState, useContext } from 'react';
import Modal from '../components/Modal';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', content: null });

  const showModal = (title, content) => {
    setModalState({ isOpen: true, title, content });
  };

  const hideModal = () => {
    setModalState({ isOpen: false, title: '', content: null });
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <Modal 
        isOpen={modalState.isOpen} 
        onClose={hideModal} 
        title={modalState.title}
      >
        {modalState.content}
      </Modal>
    </ModalContext.Provider>
  );
};