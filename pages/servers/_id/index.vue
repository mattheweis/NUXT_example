<template>
  <v-container>
    <v-row>
      <pre
        class="config pa-2"
      ><b>Servername:</b>      {{serverConfiguration.name}}</pre>
    </v-row>
    <v-row>
      <pre
        class="config pa-2"
      ><b>Uplink:</b>          {{serverConfiguration.uplink}}</pre>
    </v-row>
    <v-row>
      <pre
        class="config pa-2"
      ><b>Status:</b>          {{serverConfiguration.status}}</pre>
    </v-row>
    <v-row>
      <pre
        class="config pa-2"
      ><b>Location:</b>        {{serverConfiguration.location}}</pre>
    </v-row>
    <Rules
      v-for="(index, i) in serverConfiguration.rules"
      :key="i"
      :ext_ip="index.ext_ip"
      :proto="index.proto"
      :eport="index.eport"
      :iport="index.iport"
    />
  </v-container>
</template>

<script>
import axios from 'axios'
import Rules from '../../../components/Rules.vue'
export default {
  components: {
    Rules,
  },
  data() {
    return {
      serverConfiguration: {},
      url:
        'https://92b68d42-d685-4146-abd7-1afd0113c712.mock.pstmn.io/api/v1/client/backends?id=',
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
      const res = await axios.get(this.url + this.$route.params.id, config)
      this.serverConfiguration = res.data
      console.log(this.serverConfiguration)
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
.config {
  font-size: 1.3rem;
}
</style>