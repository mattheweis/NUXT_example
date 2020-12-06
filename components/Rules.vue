<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="box"
          ><h3>{{ ext_ip }}</h3></v-col
        >
        <v-col class="box">
          <h3>{{ proto }}</h3></v-col
        >
        <v-col class="box"
          ><h3>{{ eport }}</h3></v-col
        >
        <v-col class="box"
          ><h3>{{ iport }}</h3></v-col
        >
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