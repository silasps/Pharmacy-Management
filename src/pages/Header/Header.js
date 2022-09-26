import "bootstrap/js/src/collapse.js";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../components/contexts/useLogin";
import { useEffect, useState } from "react";
import { NavItem } from "../Header/HdStyled";

export default function MainHeader() {
  const navigate = useNavigate();

  const { loginData } = useLogin();

  const [item, setItem] = useState("");

  function clicar(pagina) {
    setItem(pagina);
    navigate(pagina);
  }

  useEffect(() => {
    navigate("/");
    setItem("map");
  }, []);

  return (
    <div className="header" style={{ zIndex: 1 }}>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="logoBox">
            <img
              className="logo"
              src="	https://www.clamed.com.br/wp-content/uploads/2015/09/logoCLAMED_verde.png"
              onClick={() => {
                navigate("/");
                setItem("map");
              }}
              style={{
                cursor: "pointer",
                width: "100px",
                height: "50px",
                margin: "0px 15px 0px 15px",
              }}
            />
          </div>
          {loginData === true && (
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavItem
                      className="nav-link"
                      type="button"
                      active={item === "map"}
                      onClick={() => clicar("map")}
                    >
                      Map
                    </NavItem>
                  </li>
                  <li className="nav-item">
                    <NavItem
                      className="nav-link"
                      type="button"
                      active={item === "register-pharm"}
                      onClick={() => clicar("register-pharm")}
                    >
                      Registrar Farmácia
                    </NavItem>
                  </li>
                  <li className="nav-item">
                    <NavItem
                      className="nav-link"
                      type="button"
                      active={item === "register-medicine"}
                      onClick={() => clicar("register-medicine")}
                    >
                      Registrar Medicamento
                    </NavItem>
                  </li>
                  <li className="nav-item">
                    <NavItem
                      className="nav-link"
                      type="button"
                      active={item === "medicine-list"}
                      onClick={() => clicar("medicine-list")}
                    >
                      Lista de Medicamentos
                    </NavItem>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
