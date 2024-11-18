<template>
  <div id="alli">
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

    <div class="search_bar">
      <div id="search_container">
        <img id="search_icon" src="../assets/images/loupe.png" alt="Search" />
        <input
          id="search_input"
          type="search"
          placeholder="Search"
          v-model="searchQuery"
          @input="filterProducts"
        />
        <span class="powered_by">Powered by Algolia</span>
      </div>
      <select id="search_filter" v-model="sortOrder" @change="sortProducts">
        <option value="">Select</option>
        <option value="asc">Ascending price</option>
        <option value="desc">Descending price</option>
        <option value="stars">Sort by stars</option>
      </select>
    </div>

    <div class="main_cont">
      <div id="roll">
        <p>Filtred by</p>

        <select
          class="custom-select"
          name="category"
          id="Colections"
          v-model="selectedCollection"
          @change="filterByCollection"
        >
          <option value="">Collection</option>
          <option value="LOUNGE">LOUNGE</option>
          <option value="CHAIR">CHAIR</option>
          <option value="ARMCHAIRS">ARMCHAIRS</option>
          <option value="SHELVES">SHELVES</option>
        </select>

        <select class="custom-select" name="category" id="Colors">
          <option value="">Color</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>

        <select
          class="custom-select"
          name="category"
          id="catas"
          v-model="selectedStars"
          @change="filterByStars"
        >
          <option value="">Stars</option>
          <option value="5">★★★★★</option>
          <option value="4">★★★★☆</option>
          <option value="3">★★★☆☆</option>
          <option value="2">★★☆☆☆</option>
          <option value="1">★☆☆☆☆</option>
        </select>

        <div id="range">
          <p>Price Range</p>
          <input
            type="range"
            class="custom-range"
            id="price"
            name="price"
            min="0"
            max="10000"
            v-model="price"
            step="10"
          />
        </div>
      </div>

      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product"
      >
        <router-link :to="`/products/${product.id}`">
          <img :src="getImage(product.image)" :alt="product.name" />
        </router-link>
        <div class="info">
          <p>{{ product.name }}</p>
          <p>${{ product.price }}</p>
          <p>{{ product.category }}</p>
          <p>{{ "★".repeat(product.stars) + "☆".repeat(5 - product.stars) }}</p>
        </div>
        <div class="cart">
          <a href="#" @click="addToCart(product)">
            <img
              class="plus"
              src="../assets/images/plus_plus.png"
              alt="add to cart"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="pagination">
      <span v-for="page in pages" :key="page" class="page-item">
        <a class="page-link" href="#">{{ page }}</a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Coombes",
          price: 9600,
          category: "LOUNGE",
          stars: 5,
          image: "Coombes.png",
        },
        {
          id: 2,
          name: "Keev Set",
          price: 1200,
          category: "TABLE & CHAIRS",
          stars: 5,
          image: "Keev_Set.png",
        },
        {
          id: 3,
          name: "Nillè",
          price: 2950,
          category: "ARMCHAIRS",
          stars: 2,
          image: "Nillè.png",
        },
        {
          id: 4,
          name: "Blanko",
          price: 1090,
          category: "SIDE TABLE",
          stars: 4,
          image: "Blanko.png",
        },
        {
          id: 5,
          name: "Momo",
          price: 2250,
          category: "SHELVES",
          stars: 1,
          image: "Momo.png",
        },
        {
          id: 6,
          name: "Penemillè",
          price: 1200,
          category: "CHAIR",
          stars: 4,
          image: "Penemillè.png",
        },
        {
          id: 7,
          name: "Kappu",
          price: 1020,
          category: "SHELVES",
          stars: 3,
          image: "kappu.png",
        },
      ],
      cart: [],
      cartVisible: false,
      searchQuery: "",
      sortOrder: "",
      filteredProducts: [],
      selectedStars: "",
      selectedCollection: "",
      price: 0,
    };
  },
  mounted() {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
    this.filteredProducts = [...this.products];
  },
  methods: {
    getImage(imageName) {
      return require(`../assets/images/${imageName}`);
    },

    addToCart(product) {
      const existingProduct = this.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },

    filterProducts() {
      let filtered = this.products;

      if (this.searchQuery) {
        filtered = filtered.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.selectedCollection) {
        filtered = filtered.filter(
          (product) => product.category === this.selectedCollection
        );
      }

      if (this.selectedStars) {
        filtered = filtered.filter(
          (product) => product.stars === parseInt(this.selectedStars)
        );
      }

      if (this.price > 0) {
        filtered = filtered.filter((product) => product.price <= this.price);
      }

      this.filteredProducts = filtered;
    },

    sortProducts() {
      if (this.sortOrder === "asc") {
        this.filteredProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === "desc") {
        this.filteredProducts.sort((a, b) => b.price - a.price);
      } else if (this.sortOrder === "stars") {
        this.filteredProducts.sort((a, b) => b.stars - a.stars);
      }
    },

    filterByStars() {
      this.filterProducts();
    },
    filterByCollection() {
      this.filterProducts();
    },

    clearCart() {
      this.cart = [];
      localStorage.removeItem("cart");
    },
  },
};
</script>
