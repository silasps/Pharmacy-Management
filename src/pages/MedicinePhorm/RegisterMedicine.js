import { useState, useEffect } from "react";
import MedicineForm from "./MedicineForm";

export default function RegisterMedicine() {

  const [medicine, setMedicine] = useState({
    nomeMedicamento: "Aspirina",
    nomeLab: "Creator Laboratories",
    doseMedicamento: "500mg",
    descMedicamento: "Aspirina - ácido acetilsalicílico 500mg² Aspirina é o medicamento da Bayer que tem ação analgésica, antitérmica e anti-inflamatória e é indicado há mais de 100 anos para o alívio da dor. Aspirina é indicada para dores de cabeça, de dente, de garganta, menstrual, muscular, nas articulações, nas costas, artrite e o alívio da dor e da febre nos resfriados ou gripes.",
    precoUnitario: "10,00",
    tipoMedicamento: "Medicamento comum",
    imagem: "",
  });
  
  console.log(medicine);

  // Atualizar a lista de Medicamentos
  function updateMedicineList(e) {
    e.preventDefault()

    updateImg(medicine.tipoMedicamento)
    
    fetch("http://localhost:3001/medicines", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(medicine),
    });
    clearForm()
  }

  // Atualizar o link da imagem
  function updateImg(tipo){
    if(tipo === "Medicamento Controlado" || tipo === ''){
      setMedicine((prev) => ({
        ...prev,
        imagem: "https://2.bp.blogspot.com/-vz8zwJG7nXg/WbfO4Lgtz_I/AAAAAAAARus/xnypZV8CP9U79oAtKm58eZJ2FqEHGQB2QCLcBGAs/s1600/remedio%2Bcontrolado1.jpg"
      }))
    } else if (tipo === 'Medicamento Comum'){
      setMedicine((prev) => ({
        ...prev,
        imagem: "https://wwyhfaiwse.map.azionedge.net/Custom/Content/Themes/Shared/Imagens/tvg_m.jpg"
      }))
    }
  }

  useEffect(()=>{
    updateImg(medicine.tipoMedicamento)
  }, [medicine.tipoMedicamento])

  // Limpar formulario
  function clearForm(){
    setMedicine({
      nomeMedicamento: "",
      nomeLab: "",
      doseMedicamento: "",
      descMedicamento: "",
      precoUnitario: "",
      tipoMedicamento: "",
    })
  }

  return (
    <>
    <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Cadastro de Medicamento</h2>
    <div
      className="form-container"
      style={{
        minWidth: '40vh',
        border: "solid #31955f 1px",
        borderRadius: "15px",
        margin: "40px 10px 40px 10px",
        padding: "15px",
      }}
    >
      <form className="row g-3" onSubmit={updateMedicineList}>
        <MedicineForm
          classData="col-md-6"
          label="Nome do Medicamento"
          id="nomeMedicamento"
          fill="*"
          value={medicine.nomeMedicamento}
          name="nomeMedicamento"
          setInfo={setMedicine}
          required
          tipo='input'
        />
        <MedicineForm
          classData="col-md-6"
          label="Nome do Laboratório"
          id="nomeLab"
          fill="*"
          value={medicine.nomeLab}
          name="nomeLab"
          setInfo={setMedicine}
          required
          tipo='input'
        />
        <MedicineForm
          classData="col-md-4"
          label="Dosagem do Medicamento"
          id="doseMedicamento"
          fill="*"
          value={medicine.doseMedicamento}
          name="doseMedicamento"
          setInfo={setMedicine}
          required
          tipo='input'
        />
        <MedicineForm
          classData="col-md-4"
          label="Tipo do Medicamento"
          id="tipoMedicamento"
          fill="*"
          value={medicine.tipoMedicamento}
          name="tipoMedicamento"
          imagem='imagem'
          setInfo={setMedicine}
          tipo='select'
        />
        <MedicineForm
          classData="col-md-4"
          label="Preço unitário"
          id="precoUnitario"
          fill="*"
          value={medicine.precoUnitario}
          name="precoUnitario"
          setInfo={setMedicine}
          required
          tipo='input'
        />
        <MedicineForm
          classData="col-md-12"
          label="Descrição do Medicamento"
          id="descMedicamento"
          value={medicine.descMedicamento}
          name="descMedicamento"
          setInfo={setMedicine}
          tipo='textarea'
        />
        

        <div
          className="col-12"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
          <button className="btn btn-primary">
            Limpar
          </button>
        </div>
      </form>
    </div>
  )
  </>
)}