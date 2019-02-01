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
    const todos: Todo[] = await (this as any).$axios.$get('/todos.json')
    commit('set', todos)
  }
}
