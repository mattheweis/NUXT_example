<template>
  <v-container>
    <v-row class="">
      <b style="font-size: 1.5rem">Server Configuration</b>
    </v-row>
    <v-row class="box ma-2">
      <pre
        class="config pa-2"
      ><b>Servername:</b>      <p>{{serverConfiguration.name}}</p></pre>
      <TextDialog
        class="ma-2 alignright"
        :field="'Change Servername'"
        :value="'name'"
        @item-Changed="updateContent"
      />
    </v-row>
    <v-row class="box ma-2">
      <pre
        class="config pa-2"
      ><b>Uplink:</b>          <p>{{serverConfiguration.uplink}}</p></pre>
      <TextDialog
        class="ma-2 alignright"
        :field="'Change Uplink'"
        :value="'uplink'"
        @item-Changed="updateContent"
      />
    </v-row>
    <v-row class="box ma-2">
      <pre
        class="config pa-2"
      ><b>Status:</b>          <p>{{serverConfiguration.status}}</p></pre>
    </v-row>
    <v-row class="box ma-2">
      <pre
        class="config pa-2"
      ><b>Location:</b>        <p>{{serverConfiguration.location}}</p></pre>
      <TextDialog
        class="ma-2 alignright"
        :field="'Change Location'"
        :value="'location'"
        @item-Changed="updateContent"
      />
    </v-row>
    <v-row>
      <b style="font-size: 1.5rem">Forwarding Rules</b>
    </v-row>
    <v-row class="ma-2">
      <v-col class="box">External IP</v-col>
      <v-col class="box">Protocol</v-col>
      <v-col class="box">External Port</v-col>
      <v-col class="box">Internal Port</v-col>
    </v-row>
    <Rules
      v-for="(index, i) in serverConfiguration.rules"
      :key="i"
      :ext_ip="index.ext_ip"
      :proto="index.proto"
      :eport="index.eport"
      :iport="index.iport"
      class="ma-2"
    />
  </v-container>
</template>

<script>
import axios from 'axios'
import Rules from '../../../components/Rules.vue'
import TextDialog from '../../../components/TextDialog.vue'
export default {
  components: {
    TextDialog,
    Rules,
  },
  data() {
    return {
      serverConfiguration: {},
      url:
        'https://92b68d42-d685-4146-abd7-1afd0113c712.mock.pstmn.io/api/v1/client/backends?id=',
      state: null,
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
  methods: {
    updateContent(){
      setTimeout(this.updateConfig,2000)
    },
    async updateConfig(item, newItem) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'qwertyuiop',
        },
      }
      try {
        const res = await axios.get(this.url + this.$route.params.id, config)
        this.serverConfiguration = res.data
        this.$forceUpdate()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style>
.config {
  font-size: 1.3rem;
}
.box {
  border: 2px solid #0f4c75;
}
</style>