import "./Modal.css";
import { useState, useEffect } from "react";
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalImg,
  ModalWrapper,
} from "./Styled";

export default function Modal({ showModal, setShowModal, cardId, imagem }) {
  const [medicines, setMedicines] = useState([]);
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    getMedicines();
    filteredMed(cardId);
  }, [cardId]);

  function getMedicines() {
    fetch(`http://localhost:3001/medicines`)
      .then((response) => response.json())
      .then((data) => {
        setMedicines(data);
        console.log(data);
      });
  }

  function filteredMed(id) {
    var filteredMedicines = medicines.filter((item) => {
      return item.id === id;
    });
    setFiltered(filteredMedicines);
    console.log("filtrado", filtered);
  }

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={filtered[0].imagem} alt="medicine" />
            <ModalContent>
              <h1>{filtered[0].nomeMedicamento}</h1>
              <p>{filtered[0].doseMedicamento}</p>
              <p><strong>Descrição</strong></p>
              <p>{filtered[0].descMedicamento}</p>
              <p><strong>Tipo</strong></p>
              <p>{filtered[0].tipoMedicamento}</p>
              <p><strong>Preço</strong></p>
              <p>{filtered[0].precoUnitario}</p>
            </ModalContent>
            <CloseModalButton
              cursor="pointer"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}
