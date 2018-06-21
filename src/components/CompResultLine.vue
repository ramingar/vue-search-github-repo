<template>
    <div class="row">
        <div class="col-sm-4 text-right">
            {{ name }}
        </div>
        <div class="col-sm-8">
            <a :href="url">{{ url }}</a>
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