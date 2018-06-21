<template>
    <div class="row">
        <div class="col-sm-4 md-text-align-right">
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

    @media all and (min-width: 641px) {
        .md-text-align-right {
            text-align: right;
        }
    }
</style>