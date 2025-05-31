import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    API.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item._id === product._id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <img src={product.images[0]} alt={product.name} width="300px" />
        <div>
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>

          <label>
            Quantity:
            <input type="number" value={quantity} min="1" onChange={e => setQuantity(Number(e.target.value))} />
          </label>

          <br />
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Gallery</h3>
        {product.images.map((img, index) => (
          <img key={index} src={img} alt="Gallery" width="100px" style={{ marginRight: "10px" }} />
        ))}
      </div>
    </div>
  );
}
