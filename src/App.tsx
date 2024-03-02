import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { SharedLayout } from "./components/SharedLayout";

const ShopsPage = lazy(() => import("./pages/ShopsPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ShopsPage />}></Route>

        <Route path="cart" element={<CartPage />} />

        <Route path="*" element={<Navigate to="welcome" />} />
      </Route>
    </Routes>
  );
};

export default App;
