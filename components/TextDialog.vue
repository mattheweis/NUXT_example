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
          {{field}}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-text-field label="New Configuration"></v-text-field>
          <v-btn color="green darken-1" text @click="dialog = false">
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
      name:"TextDialog",
      props:['field'],
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style>
</style>