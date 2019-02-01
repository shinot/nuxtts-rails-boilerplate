import Vuex from 'vuex'
import * as todos from '~/store/todos'
import axios from 'axios';
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'

createLocalVue().use(Vuex)

let mockAxiosGetResult;
jest.mock('axios', () => ({
  $get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
}))

describe('todos', () => {
  let store
  let commit

  describe('mutations', () => {
    let mutationName
    describe(mutationName = 'set', () => {
      beforeEach(() => {
        store = new Vuex.Store(cloneDeep(todos))
        commit = store.commit
      })

      it('should set todos', () => {
        expect(store.state.list).toEqual([])
        commit(mutationName, [  { id: 1, text: 'text', is_acted: false }])
        expect(store.state.list).toContainEqual( { id: 1, text: 'text', is_acted: false })
      })
    })
  })

  describe('actions', () => {
    let commit, actionName
    const action = (context = {}, payload = {}) => {
      return todos.actions[actionName].bind({$axios: axios})(context, payload)
    }

    beforeEach(() => {
      store = new Vuex.Store(cloneDeep(todos))
      commit = store.commit
    })

    describe(actionName = 'fetch', () => {
      beforeEach(() => {
        mockAxiosGetResult = [{id: 1, text: 'text', is_acted: false}]
      })

      it('should fetch todos', async () => {
        expect(store.state.list.length).toBe(0)
        await action({ commit })
        expect(store.state.list.length).toBe(1)
      })
    })
  })
})
