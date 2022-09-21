import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { useLogin } from "../../components/contexts/useLogin";


export default function Login() {

  const navigate = useNavigate();

  const { setLogin } = useLogin()

  const [ form, setForm ] = useState({
      email: "",
      password: "",
    })

  function logar(e) {
    e.preventDefault();

    
    // if(form.email ==! "" && form.password ==! ""){
    //   // Seria possivel fazer um fetch e buscar as senhas para validar aqui
    //   setLogin(true)
    // } else {
    //   setLogin(false)
    // }
    
    setLogin(true)
    alert("usuario logado");
    navigate("/map");
  }

  return (
    <div className="main">
      <div className="position-absolute top-50 start-50 translate-middle" style={{width: '300px'}}>
        <Form onSubmit={logar}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              required
              value={form.email}
              onChange={(e) => setForm((prev)=> ({ ...prev, email: e.target.value }))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              minLength={8}
              type="password"
              placeholder="Digite sua senha"
              required
              value={form.password}
              onChange={(e) => setForm((prev)=> ({ ...prev, password: e.target.value }))}
            />
          </Form.Group>
          <div style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit" style={{width: '300px'}}>
              Entrar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}