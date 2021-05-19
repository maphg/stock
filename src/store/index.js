import { createStore } from 'vuex'

export default createStore({
  state: {
    stock: [],
    stockFiltrado: []
  },
  mutations: {
    setStock(state, payload) {
      state.stock = payload
    },
    setStockFiltrados(state, payload) {
      state.stockFiltrado = payload
    }
  },
  actions: {
    async getStock({ commit }) {
      try {
        const resp = await fetch('https://www.maphg.com/america/apis/stock_activos.php?action=obtenerActivos&idUsuario=1&idDestino=1');
        const data = await resp.json();
        commit('setStock', data);
      } catch (error) {
        console.log(error)
      }
    },

    filtrarStock({ commit, state }, cod2bend) {
      const filtro = state.stock.filter(stock =>
        stock.cod2bend.includes(cod2bend)
      )
      commit('setStockFiltrados', filtro);
    }
  },
  modules: {
  }
})
