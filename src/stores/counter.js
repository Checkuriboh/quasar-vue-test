import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    doublePlusOne() {
      return this.doubleCount + 1
    },
  },
  actions: {
    increment() {
      this.count++
    }
  },
})


import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    ...mapState(useCounterStore, ['count']),
    ...mapState(useCounterStore, {
      myOwnName: 'count',
      double: store => store.count * 2,
      magicValue(store) {
        return store.someGetter + this.count + this.double
      },
    }),
  },
  computed: {
    ...mapState(useCounterStore, ['doubleCount']),
    ...mapState(useCounterStore, {
      myOwnName: 'doubleCount',
      double: (store) => store.doubleCount,
    }),
  },
  methods: {
    ...mapActions(useCounterStore, ['increment']),
    ...mapActions(useCounterStore, { myOwnName: 'increment' }),
  },
}


import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})


import { mande } from 'mande'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
  state: () => ({
    userData: null,
  }),

  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(`Welcome back ${this.userData.name}!`)
      } catch (error) {
        showTooltip(error)
        return error
      }
    },
  },
})


import { useAuthStore } from './auth-store'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    preferences: null,
    // ...
  }),
  actions: {
    async fetchUserPreferences() {
      const auth = useAuthStore()
      if (auth.isAuthenticated) {
        this.preferences = await fetchPreferences()
      } else {
        throw new Error('User must be authenticated')
      }
    },
  },
})
