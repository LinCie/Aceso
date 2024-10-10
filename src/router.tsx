import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} index />
      <Route path="/products" element={<ProductPage />} index />
    </Route>,
  ),
);

export default router;
