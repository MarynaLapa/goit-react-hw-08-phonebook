export const handlerSignUp = (state, { payload }) => {
	state.token = payload.token
	state.user = payload.user
}