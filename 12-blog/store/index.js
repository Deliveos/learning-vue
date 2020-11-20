import axios from "axios"

export const state = () => ({
  loadedPosts: [],
  loadedComments: [],
  token: null
})

export const mutations = {
  addPost(state, post) {
    state.loadedPosts.push(post)
  },
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  editPost(state, editPost) {
    const postIndex = state.loadedPosts.findIndex(
      post => post.id === editPost.id
    )
    state.loadedPosts[postIndex] = editPost
  },
  addComment(state, comment) {
    state.loadedComments.push(comment)
  },
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  nuxtServerInit({ commit }, context) {
    return axios
      .get("https://blog-nuxt-d2d88.firebaseio.com/posts.json")
      .then(response => {
        const postsArray = []
        for (let key in response.data)
          postsArray.push({ ...response.data[key], id: key })
        commit("setPosts", postsArray)
      })
      .catch(e => console.error(e))
  },
  authUser({ commit }, authData) {
    const key = "AIzaSyAPx_nfX1hXwZYLrwgcH02yPG2UTmnzhvI"
    return axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        commit("setToken", res.data.idToken)
      })
      .catch(e => {
        console.error(e)
      })
  },
  logoutUser({ commit }) {
    commit("setToken", null)
  },
  addPost({ commit }, post) {
    return axios
      .post("https://blog-nuxt-d2d88.firebaseio.com/posts.json", post)
      .then(response => {
        commit("addPost", { ...post, id: response.data.name })
      })
      .catch(e => console.error(e))
  },
  editPost({ commit, state }, post) {
    return axios
      .put(
        `https://blog-nuxt-d2d88.firebaseio.com/posts/${post.id}.json?auth=${state.token}`,
        post
      )
      .then(response => {
        commit("editPost", post)
      })
      .catch(e => console.error(e))
  },
  addComment({ commit }, comment) {
    return axios
      .post("https://blog-nuxt-d2d88.firebaseio.com/comments.json", comment)
      .then(response => {
        commit("addComment", { ...comment, id: response.data.name })
      })
      .catch(e => console.error(e))
  }
}

export const getters = {
  getLoadedPosts(state) {
    return state.loadedPosts
  },
  checkAuthUser(state) {
    return state.token !== null
  }
}
