import styled from 'styled-components';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  left: 50%;
  min-height: 250px;
  padding: 12px 12px 0 12px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
`;

const ModalPhoneBook = styled.div`
  align-items: flex-start;
  display: inline-grid;
  justify-content: center;
  margin-top: 20px;
`;

export { Backdrop, ModalContent, ModalPhoneBook };
