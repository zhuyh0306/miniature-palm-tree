export default {
  namespaced: true,
  state: () => ({
    isShowSidebarFlg: true,
    sidebarColor: ''
  }),
  mutations: {
    updateIsShowSidebarFlg(state) {
      state.isShowSidebarFlg = !state.isShowSidebarFlg
    }
  },
  actions: {}
}
