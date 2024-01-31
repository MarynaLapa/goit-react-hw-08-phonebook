export const isAuthSelector = (state) => state.auth.token
export const profileSelector = (state) => state.auth.profile

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;