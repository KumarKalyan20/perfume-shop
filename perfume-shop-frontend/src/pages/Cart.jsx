import "./Cart.css";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, i) => (
            <div key={i} className="cart-item">
              <div>
                <strong>{item.name}</strong>
              </div>
              <div>${item.price} x {item.quantity}</div>
              <div><strong>${item.price * item.quantity}</strong></div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}
