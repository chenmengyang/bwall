import { getClPosts, } from "../../api/firebaseApi";

const cl = {
    state: {
        'cl-dgy': {
            data: [],
            counter: 0,
        },
        'cl-xsd': {
            data: [],
            counter: 0,
        },
    },
    mutations: {
        counterIncrement: (state, payload) => {
            state[payload.postType].counter += payload.amount;
        },
        appendPosts: (state, payload) => {
            state[payload.postType].data = payload.data;
        }
    },
    actions: {
        fetchMorePosts: async ({ commit, state, }, {postType, amount}) => {
            // console.log(`postType is ${postType} and amount is ${amount}`);
            commit('counterIncrement', {
                postType,
                amount,
            });
            const res = await getClPosts(postType, state[postType].counter);
            commit('appendPosts', {
                postType,
                data: res,
            });
        }
    },
    getters: {
        searchPostsResults: (state) => (postType, keywords) => {
            return state[postType].data.filter(p => p.title.includes(keywords))
        }
    },
}

export default cl;