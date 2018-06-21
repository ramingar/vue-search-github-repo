<template>
    <div>
        <comp-result-line v-for="result in data" :name="result.name" :url="result.url"></comp-result-line>
    </div>
</template>

<script>
    import CompResultLine from './CompResultLine'

    export default {
        name      : "comp-result",
        data() {
            return {
                data: [
                    {name: 'repo1', url: 'url1'},
                    {name: 'repo2', url: 'url2'},
                    {name: 'repo3', url: 'url3'}
                ]
            }
        },
        components: {
            CompResultLine
        }
    }

</script>

<style scoped>

</style>