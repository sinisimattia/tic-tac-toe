import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gridSize: 3,
    symbols: ["😃", "😡"]
  },
  getters: {
    symbols(state){
      return state.symbols
    },
    size(state){
      return state.gridSize
    }
  },
  mutations: {
    addSymbol(state, symbol: string) {
      state.symbols.push(symbol)
    },
    removeSymbol(state, index: number) {
      state.symbols.splice(index, 1)
    }
  }
})
