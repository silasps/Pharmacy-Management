import "./Modal.css";
import { useState, useEffect } from "react";
import styled from 'styled-components'
import { MdClose } from "react-icons/md";
// import { Background, CloseModalButton, ModalContent, ModalImg, ModalWrapper } from "./Styled";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: poointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`


export default function Modal({ showModal, setShowModal, id, imagem }) {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    getMedicines();
  }, []);

  function getMedicines() {
    fetch(`http://localhost:3001/medicines`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMedicines(data);
        return data;
      });
  }

  // function filteredMed(id) {
  //   var filteredMedicines = medicines.filter((item) => {
  //     return item.id === id;
  //   });
  //   return filteredMedicines;
  // }

  return (
    <>
      {/* <div className="modalContainer">
        <img
          className="delete-btn"
          src="https://cdn-icons-png.flaticon.com/512/5974/5974771.png"
          onClick={(e) => {
            setModal(modalStatus);
          }}
        ></img>
        <div className="title">
          <h1>{medicines[0].nomeMedicamento}</h1>
        </div>
        <div className="body">
          <div className="left">
            <p>Inserir imagem do medicamento aqui</p>
          </div>
          <div className="right">
            <p>Inserir dados do medicmaento aqui</p>
          </div>
        </div>
      </div> */}

      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalImg src='https://cdn-icons-png.flaticon.com/512/1042/1042390.png' alt='camera' />
            <ModalContent>
              <h1>Are you ready?</h1>
              <p>Get exclusive access to our next launch</p>
              <button>Join Now</button>
            </ModalContent>
            <CloseModalButton 
              aria-label='Close modal'
              onClick={() => setShowModal(prev => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null }
    </>
  );
}
