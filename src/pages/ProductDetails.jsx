import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log("Errore API", error));
  }, [id]);

  if (!product)
    return (
      <div>
        <p>Caricamento dati...</p>
      </div>
    );

  return (
    <>
      <div className="container page-content product-details-layout">
        <div className="image-details">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-infos">
          <h1>{product.title}</h1>
          <p className="category-label">{product.category}</p>
          <h2 className="detail-price">{product.price} €</h2>
          <h3>About this item</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
}
