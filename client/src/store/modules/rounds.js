import axios from 'axios'

export default {
    namespaced: true,
    state: {
        rounds: null,
    },
    mutations: {
        CREATE_ROUND(state, payload) {
            if (state.rounds) {
                state.rounds = [...state.rounds, payload]
            } else {
                state.rounds = [payload]
            }
        },
        LOAD_ROUNDS(state, payload) {
            state.rounds = payload
        },
        // DELETE_ROUND(state, payload) {
        // state.teams = state.teams.map(team => {
        //     const round = team.rounds[payload.roundId];
        //     if (round) delete team.rounds[payload.roundId];
        //     return { ...team }
        // })
        // },
    },
    actions: {
        createRound({ commit, rootState }, payload) {
            commit('SET_LOADING', true, { root: true })
            const user = rootState.user.user.id
            const round = {
                ...payload,
                user
            }
            axios.post('/api/rounds', round)
                .then((res) => {
                    const _id = res.data._id
                    commit("CREATE_ROUND", { ...round, _id })
                })
                .catch(e => console.log(e))
                .finally(() => commit('SET_LOADING', false, { root: true }))
        },
        loadRounds({ commit, rootState }, payload) {
            commit('SET_LOADING', true, { root: true })
            const { gameId, teamId } = payload;
            const user = rootState.user.user.id;
            axios.get('/api/rounds', { params: { user, gameId, teamId } })
                .then((res) => {
                    if (res.data.length) commit('LOAD_ROUNDS', res.data)
                })
                .catch(e => console.log(e))
                .finally(() => commit('SET_LOADING', false, { root: true }))
        },
        // deleteRound({ commit, rootState }, payload) {
        // commit('SET_LOADING', true, { root: true })
        // const user = rootState.user.user.id
        // db.database().ref('users').child(user).child('games').child(payload.gameId).child('teams').child(payload.teamId).child('rounds').child(payload.roundId).remove()
        //     .then(() => commit("DELETE_ROUND", payload))
        //     .catch(e => console.log(e))
        //     .finally(() => commit('SET_LOADING', false, { root: true }))
        // },
    },
    getters: {
        rounds(state) {
            return state.rounds
        },
    }
}