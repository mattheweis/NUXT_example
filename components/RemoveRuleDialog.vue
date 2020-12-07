<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="error" dark v-bind="attrs" v-on="on"> Remove Rule </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline"> Remove Rule </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-form>
            <v-text-field label="External IP" v-model="newExtIP"></v-text-field>
            <v-text-field label="Protocol" v-model="newProto"></v-text-field>
            <v-text-field
              label="External Port"
              v-model="newExtPort"
            ></v-text-field>
            <v-text-field
              label="Internal Port"
              v-model="newIntPort"
            ></v-text-field>
          </v-form>
          <v-btn color="green darken-1" text @click="removeRule">
            Remove Rule
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'RemoveRulesDialog',
  data() {
    return {
      newExtIP: null,
      newProto: null,
      newExtPort: null,
      newIntPort: null,
      dialog: false,
    }
  },
  methods: {
    removeRule() {
      this.dialog = false
      console.log(
        'New Forwarding Rule',
        this.newExtIP,
        this.newProto,
        this.newExtPort,
        this.newIntPort
      )
    },
  },
}
</script>

<style>
</style>