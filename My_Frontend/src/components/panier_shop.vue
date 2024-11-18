<template>
  <div id="cart-page">
    <header>
      <div class="header_container">
        <div id="logo">
          <a href="#" id="logo_link">
            <img src="../assets/images/icon.png" alt="Logo" />
          </a>
        </div>
        <nav id="menus">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/magazine">Magazine</a>
        </nav>
        <div id="cart_login">
          <div id="cart_summary" @click="toggleCart">
            <a href="/cart"
              ><img id="cart_icon" src="../assets/images/panier.png" alt="Cart"
            /></a>
            <span v-if="cart.length > 0">{{ cart.length }} item(s)</span>
          </div>
          <a href="/login">LOGIN</a>
        </div>
      </div>
    </header>

    <div class="cart-container">
      <h2>Votre Panier</h2>
      <div v-if="cart.length === 0">
        <p>Votre panier est vide.</p>
      </div>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="getImage(item.image)" :alt="item.name" />
        <div class="cart-item-details">
          <h4>{{ item.name }}</h4>
          <p>Prix: ${{ item.price }}</p>
          <div class="quantity-controls">
            <button @click="updateQuantity(item.id, 'decrease')">-</button>
            <span>Quantité: {{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, 'increase')">+</button>
          </div>
          <p>Total: ${{ item.price * item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Supprimer</button>
        </div>
      </div>
      <div v-if="cart.length > 0" class="cart-total">
        <h3>Total: ${{ totalPrice }}</h3>
        <button @click="checkout">Passer à la caisse</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
  },
  methods: {
    getImage(imageName) {
      return require(`../assets/images/${imageName}`);
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    checkout() {
      alert("Passage à la caisse...");
    },
    updateQuantity(itemId, action) {
      const item = this.cart.find((i) => i.id === itemId);
      if (!item) return;

      if (action === "increase") {
        item.quantity++;
      } else if (action === "decrease" && item.quantity > 1) {
        item.quantity--;
      }
      this.updateTotalPrice();
    },
    updateTotalPrice() {
      this.cart = [...this.cart];
    },
  },
};
</script>

<style>
.cart-container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cart-container h2 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.cart-item {
  display: flex;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-details h4 {
  font-size: 1.2em;
  color: #333;
  margin-bottom: 5px;
}

.cart-item-details p {
  font-size: 1em;
  color: #666;
  margin: 5px 0;
}

.cart-item button {
  background-color: #ff4d4d;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cart-item button:hover {
  background-color: #e60000;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.quantity-controls button {
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  margin: 0 10px;
  transition: background-color 0.3s ease;
}

.quantity-controls button:hover {
  background-color: #0056b3;
}

.quantity-controls span {
  font-size: 1.1em;
  color: #333;
}

.cart-total {
  text-align: right;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 2px solid #ccc;
}

.cart-total h3 {
  font-size: 1.5em;
  color: #333;
}

.cart-total button {
  background-color: #28a745;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.1em;
}

.cart-total button:hover {
  background-color: #218838;
}

.cart-container p {
  font-size: 1.1em;
  color: #999;
  text-align: center;
}
</style>
