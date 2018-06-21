<template>

    <div class="container">

        <h1 class="app-header">Github Repo Browser</h1>

        <comp-search></comp-search>

        <comp-result></comp-result>

    </div>

</template>

<script>

    import CompSearch from './components/CompSearch';
    import CompResult from './components/CompResult'

    export default {
        name      : 'app',
        components: {
            CompSearch,
            CompResult
        }
    }

</script>

<style scoped>

    .app-header {
        padding: 3rem 1.5rem;
        text-align: center;
    }

</style>
