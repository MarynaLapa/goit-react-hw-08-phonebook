export const handlerSignUp = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
}

export const handlerLogin = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
}

export const handlerRefresh = (state, { payload }) => {
	state.profile = payload.user 
	state.token = payload.token
}

export const handlerRejectedRefresh = (state, { payload }) => {
	state.isLoading = false
	state.error = payload.error
	state.token = ''
	state.profile = null
}

export const handlerLogout = state => {
	state.isLoading = false
	state.error = ''
	state.token = ''
	
	state.profile = null
}

export const handlerRejected =  (state, { payload }) => {
    state.isLoading = false
    state.error = payload.error
}

export const handlerPending = (state) => {
	state.isLoading = true
	state.error = ''
}