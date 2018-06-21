<template>
    <div class="row">
        <div class="col-sm text-right">
            {{ name }}
        </div>
        <div class="col-sm">
            {{ url }}
        </div>
    </div>
</template>

<script>
    export default {
        name : "comp-result-line",
        props: [
            'name',
            'url'
        ]
    }
</script>

<style scoped>

</style>