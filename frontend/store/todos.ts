import { Todo, TodosState } from '~/types'

export const state = (): TodosState => ({
  list: []
})

export const mutations = {
  set(state: TodosState, todos: Todo[]) {
    state.list = todos
  }
}

export const actions = {
  async fetch({ commit }) {
    await (this as any).$axios.$get('/todos.json').then(response => {
      commit('set', response)
    })
  }
}

export default { state, mutations, actions }
