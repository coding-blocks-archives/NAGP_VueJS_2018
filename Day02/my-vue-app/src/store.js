import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {name: 'a task', priority: 1},
      {name: 'another task', priority: 3},
      {name: 'more tasks', priority: 1},
    ]
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push({
        name: payload.name,
        priority: payload.priority
      })
    }
  },
  actions: {

  }
})
