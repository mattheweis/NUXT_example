<template>
    <div>
        <h3>{{ext_ip}}</h3>
        <h3>{{proto}}</h3>
        <h3>{{eport}}</h3>
        <h3>{{iport}}</h3>
    </div>
</template>

<script>
export default {
    name:"Rules",
    props:['ext_ip','proto','eport','iport']
}
</script>

<style>

</style>