import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../../pages/login/Login";
import Map from "../../pages/Map/Map";
import RegisterMedicine from "../../pages/MedicinePhorm/RegisterMedicine";
import MedicineList from "../../pages/MedicineList/MedicineList";
import RegisterPharm from "../../pages/RegisterPharm/RegisterPharm";
import Home from "../../pages/Home"
import { PrivateRoute } from "./PrivateRoute";
import NotFound from "../../pages/NotFound";

export default function Rotas() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />

        <Route path="/map" element={<Map />} />
        <Route path="/" element={<Navigate replace to="/map" />} />

        <Route path="/register-medicine" element={<RegisterMedicine />} />
        <Route path="/medicine-list" element={<MedicineList />} />

        <Route path="/register-pharm" element={<RegisterPharm />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/entrar" element={<Navigate replace to="/login" />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
