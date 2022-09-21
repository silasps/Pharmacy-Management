import { useEffect, useState } from "react";
import MedicineCard from "./MedicineCard";
import "./MedicineList.css";

export default function MedicineList() {
  const [medicineList, setMedicineList] = useState([]);

  useEffect(() => {
    getMedicineList();
  }, []);

  function getMedicineList() {
    fetch(`http://localhost:3001/medicines`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMedicineList(data);
      });
  }

  function deleteMedicine(id, nome, dose) {
    window.alert(
      `Tem certeza que deseja excluir o medicamento ${nome} - ${dose}?`
    );
  }

  return (
    <div className="main-container">
      <h2>Lista de Medicamentos</h2>
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
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
