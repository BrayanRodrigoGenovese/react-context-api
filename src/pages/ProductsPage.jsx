import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BudgetContext } from "../contexts/BudgetContext";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  const { budgetMode } = useContext(BudgetContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log("Errore API", error));
  }, []);

  const selectedProducts = budgetMode
    ? products.filter((product) => product.price <= 30)
    : products;

  return (
    <div className="container page-content">
      <div className="page-header">
        <h1>Products</h1>
        <p className="sub-title">
          Controlla ciascuna pagina del prodotto per maggiori informazioni.
        </p>
      </div>
      <div className="products-grid">
        {selectedProducts.map((product) => {
          const [intero, centesimi] = product.price.toFixed(2).split(".");
          return (
            <Link
              key={product.id}
              to={`/Products/${product.id}`}
              className="card-link"
            >
              <div className="card">
                <div className="img-container">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="infos">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="rating">
                    {product.rating.rate} <span>{product.rating.count}</span>
                  </p>
                  <div className="price-container">
                    <span className="price-intero">{intero}</span>
                    <span className="price-centesimi">{centesimi}€</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
