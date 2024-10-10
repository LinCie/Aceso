import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<Layout />}></Route>)
);

export default router;
