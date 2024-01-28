export const handlerSignUp = (state, { payload }) => {
	state.token = payload.token
	state.user = payload.user
}

export const handlerLogin = (state, { payload }) => {
	
}

export const handlerRejected =  (state, { payload }) => {
    state.isLoading = false
    state.error = payload.error
}

export const handlerPending = (state) => {
	state.isLoading = true
	state.error = ''
}