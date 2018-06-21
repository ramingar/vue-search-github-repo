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
    import _ from 'lodash'

    export default {
        name   : "comp-search",
        data() {
            return {
                textToLookFor: ''
            }
        },
        methods: {
            ...mapActions(['search']),
            callSearch     : function () {
                this.debouncedSearch(this);
            },
            debouncedSearch: _.debounce((self) => {
                self.search({textToLookFor: self.textToLookFor})
            }, 1200)
        }
    }
</script>

<style scoped>

</style>