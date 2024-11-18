<template>
  <header>
    <div class="header_container">
      <div id="logo">
        <a href="#" id="logo_link">
          <img src="../assets/images/icon.png" alt="Logo" />
        </a>
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/magazine">Magazine</a>
      </nav>
      <div id="cart_login">
        <a href=""><img id="cart_icon" src="../assets/images//panier.png" alt="Cart" /></a>
        <a href="/login">LOGIN</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      console.log("Menu toggled");
    },
  },
};
</script>
