<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="box"
          ><h3>External Address:  {{ ext_ip }}</h3></v-col
        >
        <v-col class="box">
          <h3>Protocol:           {{ proto }}</h3></v-col
        >
        <v-col class="box"
          ><h3>ExternalPort:      {{ eport }}</h3></v-col
        >
        <v-col class="box"
          ><h3>InternalPort:      {{ iport }}</h3>
        </v-col>
        <v-col>
          <v-btn color="error" dark> Remove Rule </v-btn>
        </v-col>
        <v-col>
          <v-btn color="#2F9E00" dark> Edit Rule </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Rules',
  props: ['ext_ip', 'proto', 'eport', 'iport'],
}
</script>

<style>
.box {
  border: 2px solid #0f4c75;
}
</style>