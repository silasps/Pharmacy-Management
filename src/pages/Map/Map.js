import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SocialIcon } from "react-social-icons";

export default function Map() {
  const [pharmLocation, setPharmLocation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pharmacies")
      .then((response) => response.json())
      .then((data) => {
        setPharmLocation(data);
      });
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Localização Farmácias CLAMED</h2>
      <MapContainer
        center={[-26.301449, -48.8492354]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "800px", width: "1000px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {pharmLocation.map((pharmLocation) => (
          <Marker
            key={pharmLocation.id}
            position={[pharmLocation.latitude, pharmLocation.longitude]}
          >
            <Popup>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ margin: "10px", textAlign: "center" }}>
                  {pharmLocation.nomeFantasia}
                </h3>
                <p>
                  {pharmLocation.logradouro} {pharmLocation.numero},{" "}
                  {pharmLocation.bairro} <br />
                  CEP {pharmLocation.cep} - {pharmLocation.cidade} -{" "}
                  {pharmLocation.estado}
                </p>

                <p>
                  <strong>Fale conosco: </strong>
                  {pharmLocation.celular}
                </p>
                <SocialIcon
                  url={`https://web.whatsapp.com/send?phone=55${pharmLocation.celular
                    .replace(/(?!\w|\s)./g, "") //remove special characters
                    .replace(/\s+/g, "")}`} //remove blank spaces
                  target="_blank"
                />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
