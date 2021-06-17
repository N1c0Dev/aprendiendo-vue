import { createStore } from 'vuex'

export default createStore({
  // contiene la data que sera accesible por toda la applicacion, similar a data() pero de acceso universal
  state: {
    counter: 150,
  },
  // Es la unica forma de cambiar el valor de un state
  mutations: {
    increase(state) {
      state.counter = state.counter + 10
    },
    decrease(state) {
      state.counter = state.counter - 10
    }
  },
  // Ejecuta una mutacion y puede tener logica extra como llamados a APIS
  actions: {
    // Commit es solo un tipo de accion que se puede ejecutar
    actionIncrease({commit}) {
      // ejecuta la mutacion
      commit('increase')
    },
    actionDecrease({commit}) {
      commit('decrease')
    }
  },
  modules: {
  }
})
