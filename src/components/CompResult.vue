<template>
    <div>
        <comp-result-line v-for="(result, key) in data"
                          :name="result.name"
                          :url="result.url"
                          :key="key">
        </comp-result-line>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CompResultLine from './CompResultLine'

    export default {
        name      : "comp-result",
        methods   : {
            ...mapGetters(['repos'])
        },
        computed  : {
            data() {
                return this.repos()
            }
        },
        components: {
            CompResultLine
        }
    }

</script>

<style scoped>

</style>