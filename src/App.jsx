import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={HomePage} />
          <Route path="AboutPage" Component={AboutPage} />
          <Route path="Products" Component={ProductsPage} />
          <Route path="Products/:id" Component={ProductDetails} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
