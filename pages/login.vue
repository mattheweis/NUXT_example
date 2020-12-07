<template>
  <v-card>
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
          label="Username"
          v-model="username"
          required
          :rules="[(v) => !!v || 'Username is required']"
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          required
          :rules="[(v) => !!v || 'Password is required']"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="#0f4c75" :disabled="!isValid" @click="getToken"
        >Login</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: null,
      password: null,
      isValid: null,
      url: 'https://api.quix.click/api/v1/client/auth',
    }
  },
  methods: {
    async getToken() {
      const logindata = {
        username: this.username,
        password: this.password,
      }
      try {
        let res = await axios.post(this.url, logindata)
        document.cookie = 'quixUserToken=' + String(res.data.token)
      } catch (error) {
        console.log(error)
      }
    },
    getCookie(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
    },
  },
}
</script>

<style>
</style>