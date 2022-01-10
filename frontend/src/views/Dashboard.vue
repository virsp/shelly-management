<template>
    <div class="row pt-2">
        <div class="col">
            <h1>Shelly overview</h1>
            <Shelly/>
        </div>
    </div>
</template>
<script>
import Shelly from '../components/Shelly.vue';
export default {
    name: 'Dashboard',
    components: {
        Shelly,
    },
}
</script>
<style>
    
</style>