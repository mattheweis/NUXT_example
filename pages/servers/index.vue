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
      url:
        'https://92b68d42-d685-4146-abd7-1afd0113c712.mock.pstmn.io/api/v1/client/backends/',
    }
  },
  async created() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'qwertyuiop',
      },
    }
    try {
      const res = await axios.get(this.url, config)
      this.names = res.data.info
      console.log(this.names)
    } catch (error) {
      console.log(error)
    }
  },

}
</script>

<style>
* {
   color:  #bbe1fa;
}
</style>