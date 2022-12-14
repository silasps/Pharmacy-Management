import { useEffect, useState } from "react";
import MedicineCard from "./MedicineCard";
import "./MedicineList.css";
import { GlobalStyle } from "../../globalStyle";
import Modal from "../../components/Modal/Modal";
import { Container, Button } from "../../components/Modal/Styled";

export default function MedicineList({}) {
  const [medicineList, setMedicineList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cardId, setCardId] = useState();

  useEffect(() => {
    getMedicineList();
    // esse useEffect deveria ser chamado apenas quando o usuário entra na página, caso contrário bate infinitamente na API
    // em produção isso poderia causar grandes prejuízos para empresa
    // entendi que vc queria que a lista de medicamentos fosse atualizada quando um novo medicamento fosse deletado, mas não é a abordagem correta
    // por isso removi a dependência do useEffect
  }, []);

  function getMedicineList() {
    fetch(`http://localhost:3001/medicines`)
      .then((response) => response.json())
      .then((data) => {
        setMedicineList(data);
      });
  }

  // Deletar card
  function deleteMedicine(id, nome, dose) {
    const confirm = window.confirm(
      `Tem certeza que deseja excluir o medicamento ${nome} - ${dose}?`
    );

    if (confirm) {
      fetch(`http://localhost:3001/medicines/${id}`, {
        method: "DELETE",
      })
      // essa é a abordagem correta para atualizar a lista de medicamentos quando um medicamento é deletado
      .then(getMedicineList())
    }
  }

  //Abrir Modal
  function openModal(id) {
    setShowModal((prev) => !prev);
    setCardId(id)
    console.log("imagem clicada", id);
  }

  return (
    <>
      <div className="main-container">
        <h2 style={{ textAlign: "center", marginTop: "15px" }}>
          Lista de Medicamentos
        </h2>

        <div className="divInfo">
          <span className="info">Total: <strong>{medicineList.length}</strong> Medicamentos</span>
      </div>

        <Container showModal={showModal}>
          {/* como você já tem acesso a lista de medicamentos deve enviá-la para o modal, assim não precisa bater na API novamente */}
          <Modal showModal={showModal} setShowModal={setShowModal} cardId={cardId} medicineList={medicineList}/>
          <GlobalStyle />
        </Container>
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
                  style={{ cursor: "pointer" }}
                  className="delete-btn"
                  src="https://cdn-icons-png.flaticon.com/512/5974/5974771.png"
                  onClick={() =>
                    deleteMedicine(
                      medicine.id,
                      medicine.nomeMedicamento,
                      medicine.doseMedicamento
                    )
                  }
                ></img>
                <img
                  className="img-thumbnail"
                  src={medicine.imagem}
                  onClick={() => {
                    openModal(medicine.id)}
                  }
                ></img>
                <MedicineCard
                  key={medicine.id}
                  tipo={medicine.tipoMedicamento}
                  nomeMedicamento={medicine.nomeMedicamento}
                  precoUnitario={medicine.precoUnitario}
                  doseMedicamento={medicine.doseMedicamento}
                  img={medicine.imagem}
                  // openModalFunction={openModal}
                  // id={medicine.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
