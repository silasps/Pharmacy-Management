import { useState, useEffect } from "react";
import PharmForm from "./PharmForm";

export default function RegisterPharm() {
  const [pharm, setPharm] = useState({
    razaoSocial: "",
    cnpj: "",
    nomeFantasia: "",
    email: "",
    telefone: "",
    celular: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
    latitude: "",
    longitude: "",
  });

  function getAddress(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //retorno API
        setPharm({
          ...pharm,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
          complemento: data.complemento,
        });
      });
  }

  // API parou de funcionar
  // function getLatLong (rua,estado) {
  //   fetch(`https://nominatim.openstreetmap.org/search?q=${rua}+${estado}&format=json`)
  //   .then((response) => response.json())
  //   .then(data => {
  //     const {lat, lon} = data[0]
  //     setPharm(prev => ({
  //       ...prev,
  //       latitude: lat,
  //       longitude: lon
  //     }))
  //   })
  // }

  const apiKey = "";

  function getLatLong(numero, rua, cidade, estado) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${numero}+${rua},+${cidade},+${estado}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data.results[0].geometry.location;
        setPharm((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
        }));
      });
  }

  useEffect(() => {
    if (pharm.cep.length === 9 || pharm.cep.length === 8) {
      getAddress(pharm.cep);
      getLatLong(pharm.numero, pharm.logradouro, pharm.cidade, pharm.estado);
    }
  }, [pharm.cep]);

  function updatePharmList(e) {
    e.preventDefault();

    fetch("http://localhost:3001/pharmacies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pharm),
    });
    clearForm();
  }

  // Limpar formulario
  function clearForm() {
    setPharm({
      razaoSocial: "",
      cnpj: "",
      nomeFantasia: "",
      email: "",
      telefone: "",
      celular: "",
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      complemento: "",
      latitude: "",
      longitude: "",
    });
  }

  return (
    <div
      className="form-container"
      style={{
        minWidth: "40vh",
        border: "solid #31955f 1px",
        borderRadius: "15px",
        margin: "40px 10px 40px 10px",
        padding: "15px",
      }}
    >
      <form className="row g-3" onSubmit={updatePharmList}>
        <PharmForm
          classData="col-md-6"
          label="Razão Social"
          id="razaoSocial"
          fill="*"
          value={pharm.razaoSocial}
          name="razaoSocial"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-6"
          label="Nome Fantasia"
          id="nomeFantasia"
          fill="*"
          value={pharm.nomeFantasia}
          name="nomeFantasia"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-4"
          label="CNPJ"
          id="cnpj"
          fill="*"
          value={pharm.cnpj}
          name="cnpj"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-4"
          label="E-mail"
          id="email"
          fill="*"
          value={pharm.email}
          name="email"
          setInfo={setPharm}
          type="e-mail"
          required
        />
        <PharmForm
          classData="col-md-4"
          label="Telefone"
          id="telefone"
          value={pharm.telefone}
          name="telefone"
          setInfo={setPharm}
        />
        <PharmForm
          classData="col-md-4"
          label="Celular"
          id="celular"
          fill="*"
          value={pharm.celular}
          name="celular"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-2"
          label="CEP"
          id="cep"
          fill="*"
          value={pharm.cep}
          name="cep"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-6"
          label="Logradouro/Endereço"
          id="logradouro"
          fill="*"
          value={pharm.logradouro}
          name="logradouro"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-2"
          label={"Número"}
          id="numero"
          fill="*"
          value={pharm.numero}
          name="numero"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-4"
          label={"Bairro"}
          id="bairro"
          fill="*"
          value={pharm.bairro}
          name="bairro"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-6"
          label={"Cidade"}
          id="cidade"
          fill="*"
          value={pharm.cidade}
          name="cidade"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-2"
          label={"Estado"}
          id="estado"
          fill="*"
          value={pharm.estado}
          name="estado"
          setInfo={setPharm}
          required
        />
        <PharmForm
          classData="col-md-6"
          label={"Complemento"}
          id="complemento"
          value={pharm.complemento}
          name="complemento"
          setInfo={setPharm}
        />
        <PharmForm
          classData="col-md-2"
          label={"Latitude"}
          id="latitude"
          fill="*"
          value={pharm.latitude}
          name="latitude"
          setInfo={setPharm}
          required
          disable
        />
        <PharmForm
          classData="col-md-2"
          label={"Longitude"}
          id="longitude"
          fill="*"
          value={pharm.longitude}
          name="longitude"
          setInfo={setPharm}
          required
          disable
        />

        <div
          className="col-12"
          style={{
            display: "flex",
            justifyContent: "space-around",
            minWidth: "100px",
          }}
        >
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
          <button type="reset" className="btn btn-primary" onClick={clearForm}>
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}
