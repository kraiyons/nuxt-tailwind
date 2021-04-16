export const state = () => ({
  // Auth
  signedIn: false,
  // General Page
  pageTitle: 'Loading...',
  activeModule: null,
  // Member Info
  memberId: null,
  memberName: null,
  memberEmail: null,
  clubId: null,
  roleId: null,
  permission: {
    Customization: {},
    Document: {},
    Gallery: {},
    Membership: {},
    Noticeboard: {},
    Permission: {},
  },
  tempData: null,
  clubName: '',
  activeClub: {},
  clubList: [],
})

export const mutations = {
  setAuthSignedIn(state, signedIn) {
    state.signedIn = signedIn
  },
  setPageTitle(state, pageTitle) {
    state.pageTitle = pageTitle
  },
  setMemberId(state, memberId) {
    state.memberId = memberId
  },
  setMemberName(state, memberName) {
    state.memberName = memberName
  },
  setMemberEmail(state, memberEmail) {
    state.memberEmail = memberEmail
  },
  setIdToken(state, idToken) {
    state.idToken = idToken
  },
  setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken
  },
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
  setClubId(state, clubId) {
    state.clubId = clubId
  },
  setClubName(state, clubName) {
    state.clubName = clubName
  },
  setRoleId(state, roleId) {
    state.roleId = roleId
  },
  setPermission(state, permission) {
    state.permission = permission
  },
  setTempData(state, tempData) {
    state.tempData = tempData
  },
  setClubList(state, clubs) {
    state.clubList = clubs
  },
  setActiveClub(state, club) {
    state.activeClub = club
  },
  setActiveModule(state, mod) {
    state.activeModule = mod
  },
}

export const actions = {
  // fetchPermissions({ commit, state }, params = {}) {
  //   return this.$ApiService
  //     .getMemberPermissions(state.clubId, state.roleId)
  //     .then((res) => {
  //       const permissions = res
  //       let permission = {}
  //       for (let i in permissions) {
  //         permission = {
  //           ...permission,
  //           [permissions[i].moduleName]: {
  //             create: permissions[i].create,
  //             read: permissions[i].read,
  //             update: permissions[i].update,
  //             delete: permissions[i].delete,
  //           },
  //         }
  //       }
  //       commit('setPermission', permission)
  //     })
  // },
  // fetchClubs({ commit, dispatch }, params = {}) {
  //   return this.$ApiService
  //     .getClubsJoinedByMember(params.memberId)
  //     .then((res) => {
  //       const clubWithAdminAccess = res.filter((r) => r.role !== 'None')
  //       commit('setClubList', clubWithAdminAccess)
  //       dispatch('fetchPermissions')
  //     })
  // },
}
export const getters = {}
