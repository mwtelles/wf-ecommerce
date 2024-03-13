import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";
import PurchaseConfirmationPage from "../pages/PurchaseConfirmation";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/purchase-confirmation" element={<PurchaseConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
