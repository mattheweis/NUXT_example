<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-grease-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          {{ this.field }}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-text-field
            label="New Configuration"
            v-model="usrInput"
          ></v-text-field>
          <v-btn color="green darken-1" text @click="updataConfig">
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TextDialog',
  props: ['field', 'jsKey'],
  data() {
    return {
      dialog: false,
      usrInput: null,
      url: 'ChangeThistoAPI.com',
    }
  },
  methods: {
    async updataConfig() {
      this.dialog = false
      const config = {
        headers: {
          'Content-Type': 'application/json-patch+json',
          Authorization: 'qwertyuiop', //Change this
        },
      }
      var info = {
        cmd: [{
          op: 'modify',
          data: {},
        }],
      }
      this.config.cmd.data[this.jsKey] = this.usrInput

      if (this.usrInput != null) {
        try {
          let res = await axios.patch(this.url, info, config)
        } catch (error) {}
        this.$emit('item-Changed', this.jsKey, this.usrInput)
      }
    },
  },
}
</script>

<style>
</style>