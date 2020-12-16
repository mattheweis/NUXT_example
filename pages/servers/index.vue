<template>
  <div>
    <ServerNames
      v-for="index in names"
      :key="index.id"
      :id="index.id"
      :servername="index.name"
      :uplink="index.uplink"
      :status="index.status"
      :location="index.location"
    />
  </div>
</template>

<script>
import ServerNames from '../../components/ServerNames.vue'
import axios from 'axios'

export default {
  components: {
    ServerNames,
  },
  data() {
    return {
      names: [],
      url: 'https://api.quix.click/api/v1/client/backends',
      Authorization: this.$store.state.token
    }
  },
  async created() {
    // const config = {
    //   headers:{
    //     'Authorization': 'c34c2762e35dad4683db651f67f70d23'
    //   }
    // }
    try {
      const res = await axios.get(this.url, {
        headers:{
          "Authorization":`token ${this.Authorization}`
        }
      })
      console.log(this.Authorization)
      this.names=res.data.data
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
* {
  color: #bbe1fa;
}
</style>