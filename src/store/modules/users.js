export default {
  state: {
    users: [],
    filteredUsers: [],
    limit: 0,
    pagination: {
      pages: 0,
      pageRows: 50,
      currentPage: 0,
    },
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
    updateFilteredUsers(state, users) {
      state.filteredUsers = users;
    },
    pushUser(state, user) {
      state.users.push(user);
    },
    setLimit(state, limit) {
      state.limit = limit < 0 ? 0 : limit;
    },
    filterUsers(state, text) {
      state.filteredUsers = state.users.filter((el) => {
        return (
          el.id.toString().includes(text) ||
          el.firstName.toLowerCase().includes(text) ||
          el.lastName.toLowerCase().includes(text) ||
          el.phone.includes(text) ||
          el.email.toLowerCase().includes(text)
        );
      });
    },
    updatePagination(state) {
      state.pagination.pages = Math.ceil(
        (state.filteredUsers.length || 1) / state.pagination.pageRows
      );
      state.pagination.currentPage = 1;
    },
    nextPage(state) {
      if (state.pagination.currentPage >= state.pagination.pages)
        state.pagination.currentPage = state.pagination.pages;
      else state.pagination.currentPage++;
    },
    prevPage(state) {
      if (state.pagination.currentPage <= 1) state.pagination.currentPage = 1;
      else state.pagination.currentPage--;
    },
  },
  actions: {
    async fetchUsers({ commit, state }) {
      await fetch(
        `http://www.filltext.com/?rows=${state.limit}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
      )
        .then((res) => res.json())
        .then((data) => {
          commit("updateUsers", data);
          commit("updateFilteredUsers", data);
          commit("updatePagination");
        });
    },
    async sortUsers({ commit, state }, { field, asc }) {
      let sortedUsers = await state.filteredUsers.sort(function(a, b) {
        if (!asc) return a[field] > b[field] ? 1 : -1;
        else return a[field] > b[field] ? -1 : 1;
      });
      commit("updateFilteredUsers", sortedUsers);
    },
  },
  getters: {
    getUsers(state) {
      return new Promise((res, rej) => {
        let limit = state.pagination.currentPage * state.pagination.pageRows;

        return res(
          state.filteredUsers.reverse().filter((el, index) => {
            return index < limit && index >= limit - state.pagination.pageRows;
          })
        );
      });
    },
    getUsersAmount(state) {
      return state.filteredUsers.length;
    },
    getLimit(state) {
      return state.limit;
    },
    getPagination(state) {
      return state.pagination;
    },
  },
};
