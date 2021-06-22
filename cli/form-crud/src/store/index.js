import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    tasks: [],
    task: {
      id: '',
      name: '',
      category: [],
      status: '',
      number: 0,
    },
  },
  mutations: {
    set(state, payload) {
      state.tasks.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter(task => task.id !== payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    task(state, payload) {
      // Validar que la tarea exista para editarla
      if (!state.tasks.find(task => task.id === payload)) {
        router.push('/')
        return
      }

      state.task = state.tasks.find(task => task.id === payload)
    },
    update(state, payload) {
      state.tasks = state.tasks.map(task => task.id === payload.id ? payload : task)
      // router.push: redirecciona al path especificado
      router.push('/')
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    load(state, payload) {
      state.tasks = payload
    },
  },
  actions: {
    setTask({ commit }, task) {
      commit('set', task)
    },
    deleteTask({ commit }, id) {
      commit('delete', id)
    },
    sendTask({ commit }, id) {
      commit('task', id)
    },
    updateTask({ commit }, task) {
      commit('update', task)
    },
    loadLocalStorage({ commit }) {
      // localStorage.getItem : obtiene la key desde el local storage
      if (localStorage.getItem('tasks')) {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        commit('load', tasks)
        return
      }
      // Crea la key y su valor en el local storage
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  },
  modules: {
  }
})
