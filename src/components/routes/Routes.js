import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../../pages/login/Login";
import Map from "../../pages/Map/Map";
import RegisterMedicine from "../../pages/medicinesMngmt/RegisterMedicine";
import MedicineList from "../../pages/medicinesMngmt/MedicineList";
import RegisterPharm from "../../pages/pharmMngmt/RegisterPharm";
import Home from "../../pages/Home"
import { PrivateRoute } from "./PrivateRoute";
import NotFound from "../../pages/NotFound";

export default function Rotas() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />

        <Route path="/map" element={<Map />} />

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
