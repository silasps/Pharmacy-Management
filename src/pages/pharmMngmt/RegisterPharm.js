import { Button } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";

export default function RegisterPharm() {

  const [form, setForm] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
  });

  useEffect(() => {
    if (form.cep.length === 9) {
        fetch(`https://viacep.com.br/ws/${form.cep}/json/`)
        .then((response) => {
          return response.json();
        })
        .then((data) => { //retorno API
          setForm(data);
        });
    }
  }, [form.cep]);

  return (
    <div>
      <h2 className="col align-self-center">Buscar CEP</h2>
      <form>
        <input
          // onBlur={carregaCep}
          type="text"
          className="form-control"
          id="CEP"
          aria-describedby="cep"
          placeholder="Informe um CEP para buscar"
          value={form.cep}
          onChange={(e) => setForm({ ...form, cep: e.target.value })}
        ></input>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="street"
            aria-describedby="street"
            placeholder="Rua"
            value={form.logradouro}
            onChange={(e) => setForm({ ...form, logradouro: e.target.value })}
          ></input>
          <input
            type="text"
            className="form-control"
            id="bairro"
            aria-describedby="neighbor"
            placeholder="Bairro"
            value={form.bairro}
            onChange={(e) => setForm({ ...form, bairro: e.target.value })}
          ></input>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="city"
            aria-describedby="city"
            placeholder="Cidade"
            value={form.localidade}
            onChange={(e) => setForm({ ...form, localidade: e.target.value })}
          ></input>
          <input
            type="text"
            className="form-control"
            id="state"
            aria-describedby="state"
            placeholder="Estado"
            value={form.uf}
            onChange={(e) => setForm({ ...form, uf: e.target.value })}
          ></input>
        </div>
      </form>
    </div>
  );
}

// https://viacep.com.br/ws/{cep}/json/
// https://www.figma.com/file/gmt69WuunZhlaSOjlU1luk/Untitled?node-id=0%3A1
// export const validEmail = new RegExp(
//     '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
//  );
