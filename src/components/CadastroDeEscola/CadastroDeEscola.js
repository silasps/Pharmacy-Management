import { useState } from "react";

export default function CadastroDeEscola() {
  //   const [formulario, setFormulario] = useState({
  //     nome: "",
  //     endereco: "",
  //     latitude: 0,
  //     longitude: 0,
  //   });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     // mandar os dados do formulario para o backend
  //     fetch("http://localhost?3001/esolas", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formulario),
  //     });
  //   };

  const [endereco, setEndereco] = useState();

  // Pegar os dados de Longitude e Latitude quando clicar em um botao
  //   const handleGenerateData = () => {
  //     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${formulario.endereco}.json?${ACCESS_TODEN_MAP_BOX}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //         const longitude= data.features[0].center[0];
  //         const latitude= data.features[0].center[1];
  //         setFormulario((prev) => ({...prev, latitude, longitude}))
  //     })
  //   }
  const API_KEY = 'AIzaSyAJ5RwSgHfPUtcCfF3D1yO3bPOzEwgFmAM'

    const handleGenerateData = (e) => {
        e.preventDefault()
        console.log('entrei');
      fetch(
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          "Rua Hamilton de Barros" +
          "&key=" +
          API_KEY
      )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
          const latitude = data.results[0].geometry.location.lat;
          const longitude = data.results[0].geometry.location.lng;
          console.log({ latitude, longitude });
        });
    };

  return (
    <div>
      <h1>Cadastro de Escola</h1>
      <form>
        <label>Endereco</label>
        <input
          value={endereco}
          onChange={(e) => {
            setEndereco(e.target.value);
          }}
        />
        <button onClick={handleGenerateData}>gerar</button>
      </form>
    </div>
  );
}
