import { useEffect, useState } from "react";
import MedicineCard from "./MedicineCard";
import "./MedicineList.css";
import Modal from "../../components/Modal/Modal";
// import { Container, Button } from "../../components/Modal/Styled";
import styled from 'styled-components'
import { GlobalStyle } from "../../globalStyle";

const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
`

export default function MedicineList({  }) {
  const [medicineList, setMedicineList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getMedicineList();
  }, [medicineList]);

  function getMedicineList() {
    fetch(`http://localhost:3001/medicines`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMedicineList(data);
      });
  }

  function deleteMedicine(id, nome, dose) {
    const confirm = window.confirm(
      `Tem certeza que deseja excluir o medicamento ${nome} - ${dose}?`
    );

    if (confirm) {
      fetch(`http://localhost:3001/medicines/${id}`, {
        method: "DELETE",
      });
    }
  }

  function openModal() {
    setShowModal(prev => !prev);
    console.log('imagem clicada');
  }

  return (
    <>
    {/* <div className="main-container">
      <h2 style={{ textAlign: "center", marginTop: "15px" }}>
        Lista de Medicamentos
      </h2>
      <div
        className="cards-box"
        style={{
          minHeight: "90vh",
          border: "solid #31955f 1px",
          borderRadius: "15px",
          margin: "40px 10px 40px 10px",
          padding: "15px",
          msAlignSelf: "center",
        }}
      >
        {medicineList.map((medicine) => {
          return (
            <div className="medicine-card">
              <img
                className="delete-btn"
                src="https://cdn-icons-png.flaticon.com/512/5974/5974771.png"
                onClick={(e) =>
                  deleteMedicine(
                    medicine.id,
                    medicine.nomeMedicamento,
                    medicine.doseMedicamento
                  )
                }
              ></img>

              <MedicineCard
                key={medicine.id}
                tipo={medicine.tipoMedicamento}
                nomeMedicamento={medicine.nomeMedicamento}
                precoUnitario={medicine.precoUnitario}
                doseMedicamento={medicine.doseMedicamento}
                funcao={showModal}
                // id={medicine.id}
              />
            </div>
          );
        })}
      </div>
    </div> */}

      <Container>
        <Button onClick={openModal}>I'm a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
}
