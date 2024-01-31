export const handlerSignUp = (state, { payload }) => {
	state.isLoading = false
	state.token = payload.token
	state.profile = payload.user
	state.isLoggedIn = true
}

export const handlerLogin = (state, { payload }) => {
	state.isLoading = false
	state.token = payload.token
	state.profile = payload.user
	state.isLoggedIn = true
}

export const handlerRefresh = (state, { payload }) => {
	state.isLoading = false
	state.profile = payload.user 
	state.token = payload.token
	state.isRefreshing = false
}
export const handlerRefreshPending = (state => {
	handlerPending()
    state.isRefreshing = true;
})
	
export const handlerRefreshRejected = (state, { payload }) => {
	// state.isLoading = false
	state.error = payload?.error
	// state.token = null
	// state.profile = null
}

export const handlerLogout = state => {
	state.isLoading = false
	state.error = ''
	state.token = null 
	state.profile = { name: null, email: null }
	state.isLoggedIn = false;
}

export const handlerRejected =  (state, { payload }) => {
    state.isLoading = false
    state.error = payload?.error
}

export const handlerPending = (state) => {
	state.isLoading = true
	state.error = ''
}