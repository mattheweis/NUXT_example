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
          <v-btn color="green darken-1" text @click="patchData"> Done </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TextDialog',
  props: ['field', 'value'],
  data() {
    return {
      dialog: false,
      usrInput: null,
    }
  },
  methods: {
    patchData() {
      this.dialog = false
      const config = {
        headers: {
          'Content-Type': 'application/json-patch+json',
          Authorization: 'qwertyuiop',
        },
        data: {
          op: 'update',
          key: this.value,
          value: this.usrInput,
        },
      }
      if (this.usrInput != null) {
        //console.log(this.usrInput)
        this.$emit('item-Changed', this.value, this.usrInput)
      }
    },
  },
}
</script>

<style>
</style>