export default {
  state: {
    users: [],
    limit: 0,
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
    setLimit(state, limit) {
      state.limit = limit < 0 ? 0 : limit;
    },
  },
  actions: {
    async fetchUsers({ commit, state }) {
      await fetch(
        `http://www.filltext.com/?rows=${state.limit}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
      )
        .then((res) => res.json())
        .then((data) => commit("updateUsers", data));
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    lastIndex(state) {
      return;
    },
    getLimit(state) {
      return state.limit;
    },
  },
};
