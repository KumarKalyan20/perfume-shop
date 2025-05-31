export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item, i) => (
        <div key={i}>
          {item.name} - ${item.price} x {item.quantity}
        </div>
      ))}
      <p><strong>Total: ${total}</strong></p>
    </div>
  );
}
