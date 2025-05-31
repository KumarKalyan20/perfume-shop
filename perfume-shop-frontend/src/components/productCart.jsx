import { useNavigate } from "react-router-dom";
import './productCart.css'

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${product._id}`)} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", margin: "10px", cursor: "pointer" }}>
      <img src={product.images[0]} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>{product.description.slice(0, 50)}...</p>
      <p><strong>${product.price}</strong></p>
    </div>
  );
}
