import { useEffect, useState } from "react";
import ProductCart from "../components/productCart"; // Capitalized import
import API from "../api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map(prod => (
        <ProductCart key={prod._id} product={prod} />
      ))}
    </div>
  );
}
