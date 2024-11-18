export default {
  data() {
    return {
      products: [
        { name: "Coombes", price: 9600, category: "LOUNGE", rating: "★★★★★", image: "Coombes.png" },
        { name: "Keev Set", price: 1200, category: "TABLE & CHAIRS", rating: "★★★★★", image: "Keev_Set.png" },
        { name: 'Nillè', price: 2950, category: 'ARMCHAIRS', rating: '★★☆☆☆', image: 'Nillè.png' },
        { name: 'Blanko', price: 1090, category: 'SIDE TABLE', rating: '★★★★☆', image: 'Blanko.png' },
        { name: 'Momo', price: 2250, category: 'SHELVES', rating: '★☆☆☆☆', image: 'Momo.png' },
        { name: 'Penemillè', price: 1200, category: 'CHAIR', rating: '★★★★☆', image: 'Penemillè.png' },
        { name: 'Kappu', price: 1020, category: 'SHELVES', rating: '★★★☆☆', image: 'kappu.png' }
      ],
      searchQuery: "",
      sortOrder: "",
      filteredProducts: [],
    };
  },
  mounted() {
    this.filteredProducts = this.products;
  },
  methods: {
    getImage(imageName) {
      return require(`../assets/images/${imageName}`);
    },
    filterProducts() {
      const query = this.searchQuery.toLowerCase();
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)
      );
      this.sortProducts();
    },
    sortProducts() {
      if (this.sortOrder === "asc") {
        this.filteredProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === "desc") {
        this.filteredProducts.sort((a, b) => b.price - a.price);
      }
    },
  },
};