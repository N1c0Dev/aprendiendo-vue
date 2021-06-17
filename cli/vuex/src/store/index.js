import { createStore } from 'vuex'

export default createStore({
  // contiene la data que sera accesible por toda la applicacion, similar a data() pero de acceso universal
  state: {
    counter: 150,
  },
  // Es la unica forma de cambiar el valor de un state
  mutations: {
    increase(state, payload) {
      state.counter = state.counter + payload
    },
    // payload convencion de nombre de la variable que recibe los parametros
    decrease(state, payload) {
      state.counter = state.counter - payload
    }
  },
  // Ejecuta una mutacion y puede tener logica extra como llamados a APIS
  actions: {
    // Commit es solo un tipo de accion que se puede ejecutar
    actionIncrease({commit}, number) {
      // ejecuta la mutacion
      commit('increase', number)
    },
    actionDecrease({commit}, number) {
      commit('decrease', number)
    },
    actionButton({commit}, payload) {
      if (payload.state) {
        commit('increase', payload.number)
      } else {
        commit('decrease', payload.number)
      }
    }
  },
  modules: {
  }
})
