<template>
    <div class="row">
        <div class="col-sm">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Type your search..."
                       v-model="textToLookFor"
                       @input="callSearch">
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name   : "comp-search",
        data() {
            return {
                textToLookFor: ''
            }
        },
        methods: {
            ...mapActions(['search']),
            callSearch() {
                this.search({textToLookFor: this.textToLookFor})
            }
        }
    }
</script>

<style scoped>

</style>