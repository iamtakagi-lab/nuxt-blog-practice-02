<template>
    
</template>

<script>
import { mapState, mapGetters } from 'vuex'

    export default {
        middleware: 'getContentful',
        async asyncData( { params, error }) {
            return {
                category: params.slug
            }
        },
        head(){
            return {
                 title: "カテゴリ: " + this.category  + ' - manji.fun'
            }
        },
        computed: {
            ...mapGetters(['linkTo']),
            ...mapGetters(['postsByCategory'])
        }
    }
</script>

<style lang="scss">

</style>