import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: {}
  },
  mutations: {
    SOCKET_roomCreated (state, room) {
      state.rooms[room.name] = room
    }
  },
  actions: {
  },
  modules: {
  }
})
