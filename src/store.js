import { createStore } from 'vue';

export const store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    setCart(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
  },
});
