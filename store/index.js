export const state = () => ({
    token: null,
})

export const mutations = {
    setToken(state, value) {
        //console.log('UserTokenUpdated:',value)
        state.token = value
    },
}