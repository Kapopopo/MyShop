<template>
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
        <a href="/cart"
          ><img id="cart_icon" src="../assets/images//panier.png" alt="Cart"
        /></a>
        <a href="/login">LOGIN</a>
      </div>
    </div>
  </header>

  <div class="product-details" v-if="product">
    <img
      class="product-image"
      :src="getImage(product.image)"
      :alt="product.name"
    />
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p>Price: ${{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <p>
        Rating: {{ "★".repeat(product.stars) + "☆".repeat(5 - product.stars) }}
      </p>
      <p>Description: {{ product.description }}</p>
      <button class="add-to-panier" @click="addToCart(product)">
        Add to Panier
      </button>

      <router-link class="router-link" to="/products"
        >Back to Product List</router-link
      >
    </div>
  </div>
  <div v-else>
    <router-link to="/products">Back to Product List</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      product: null,
      products: [
        {
          id: 1,
          name: "Coombes",
          price: 9600,
          category: "LOUNGE",
          stars: 5,
          image: "Coombes.png",
          description:
            "A luxurious lounge chair designed for exceptional comfort and style. With a sleek, modern design, it features plush cushions that provide a soft, relaxing experience. Measuring 90 cm in height and 85 cm in width, it offers both ample support and a stylish statement piece for any room.Whether in a contemporary or traditional setting, this chair combines elegance with ultimate relaxation.",
        },
        {
          id: 2,
          name: "Keev Set",
          price: 1200,
          category: "TABLE & CHAIRS",
          stars: 5,
          image: "Keev_Set.png",
          description: "A perfect set for dining with elegance and style.",
        },
        {
          id: 3,
          name: "Nillè",
          price: 2950,
          category: "ARMCHAIRS",
          stars: 2,
          image: "Nillè.png",
          description:
            "An armchair that blends simplicity with a touch of sophistication.",
        },
        {
          id: 4,
          name: "Blanko",
          price: 1090,
          category: "SIDE TABLE",
          stars: 4,
          image: "Blanko.png",
          description: "A modern side table with a clean and sleek design.",
        },
        {
          id: 5,
          name: "Momo",
          price: 2250,
          category: "SHELVES",
          stars: 1,
          image: "Momo.png",
          description:
            "Versatile shelving unit for organizing your space stylishly.",
        },
        {
          id: 6,
          name: "Penemillè",
          price: 1200,
          category: "CHAIR",
          stars: 4,
          image: "Penemillè.png",
          description: "A chair that offers both comfort and durability.",
        },
        {
          id: 7,
          name: "Kappu",
          price: 1020,
          category: "SHELVES",
          stars: 3,
          image: "kappu.png",
          description:
            "A compact shelving unit for displaying your favorite items.",
        },
      ],
    };
  },

  mounted() {
    const productId = parseInt(this.id, 10);
    this.product = this.products.find((p) => p.id === productId);
  },
  methods: {
    getImage(imageName) {
      return require(`@/assets/images/${imageName}`);
    },
    addToCart(product) {
      const existingProduct = this.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
  },
};
</script>

<style scoped>
.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 200px;
}

#logo img {
  width: 40px;
}

#menus {
  display: flex;
  gap: 50px;
}

#menus a:nth-child(1):hover,
#menus a:nth-child(2):hover,
#menus a:nth-child(3):hover,
#cart_login a:nth-child(1):hover,
#cart_login a:nth-child(2):hover {
  transition: transform 0.3s;
  transform: scale(1.05);
}

#menus a,
#cart_login a {
  text-decoration: none;
  color: #111;
  font-weight: 500;
  letter-spacing: 1px;
}

#cart_login {
  display: flex;
  gap: 20px;
  align-items: center;
}

#cart_icon {
  width: 24px;
  height: 24px;
}

.product-details {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 1300px;
  padding: 300px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 700px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
}

.product-info h1 {
  margin-top: 80px;
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.product-info p {
  font-size: 1.4rem;
  color: #555;
  margin: 15px 0;
}

.product-info p:nth-child(4) {
  font-size: 1.4rem;
  color: #f0b419;
}

.product-info p:nth-last-child(2) {
  font-size: 1.4rem;
  color: #666;
}

@media (max-width: 768px) {
  .product-details {
    flex-direction: column;
    align-items: center;
  }

  .product-info {
    gap: 10px;
    text-align: center;
  }

  .product-image {
    max-width: 300px;
  }
}
.router-link {
  display: inline-block;
  background-color: black;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

.router-link:hover {
  background-color: red;
  transform: translateY(-2px);
}

.router-link:active {
  background-color: #388e3c;
  transform: translateY(0);
}

.add-to-panier {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.add-to-panier:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.add-to-panier:active {
  background-color: #388e3c;
  transform: scale(1);
}
</style>
