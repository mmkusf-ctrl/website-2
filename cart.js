function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    count += item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <h4>${item.name}</h4>
          <div class="cart-qty">
            <button onclick="updateQty(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="updateQty(${index}, 1)">+</button>
          </div>
        </div>
        <span class="remove-item" onclick="removeItem(${index})">✕</span>
      </div>
    `;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = count;
}
