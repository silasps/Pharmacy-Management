import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page not found</h1>
      <button
        style={{ padding: "10px", margin: "20px" }}
        onClick={(e) => navigate("/home")}
      >
        Pagina Home
      </button>

    <div style={{margin: '10px', display: 'flex', flexDirection: 'collumn', justifyContent: 'space-between' }}>
        <p>Usuarios</p>
      <button type="button" className="btn btn-primary">Primary</button>
    </div>

      <div className="container">

        <div className="row">
          <div className="col fw-bolder text-center border-bottom">#</div>
          <div className="col fw-bolder text-center border-bottom">Nome</div>
          <div className="col fw-bolder text-center border-bottom">E-mail</div>
          <div className="col fw-bolder text-center border-bottom">Idade</div>
        </div>
        <div className="row">
          <div className="col fw-bolder text-center border-bottom">1</div>
          <div className="col text-center border-bottom">Yan</div>
          <div className="col text-center border-bottom">yan.m.esteves@gmail.com</div>
          <div className="col text-center border-bottom">29</div>
        </div>
        <div className="row">
          <div className="col fw-bolder text-center border-bottom">2</div>
          <div className="col text-center border-bottom">Silas</div>
          <div className="col text-center border-bottom">silaspereiras@gmail.com</div>
          <div className="col text-center border-bottom">32</div>
        </div>
      </div>
    </div>
  );
}
