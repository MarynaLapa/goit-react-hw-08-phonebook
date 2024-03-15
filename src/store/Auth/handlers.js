export const handlerSignUp = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
	state.isLoggedIn = true
}

export const handlerLogin = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
	state.isLoggedIn = true
}

export const handlerRefresh = (state, { payload }) => {
	state.profile = payload
	state.isRefreshing = false
	state.isLoggedIn = true
}

export const handlerRefreshPending = (state => {
    state.isRefreshing = true;
})

export const handlerLogout = state => {
	state.token = null 
	state.profile = { name: null, email: null }
	state.isLoggedIn = false;
}


