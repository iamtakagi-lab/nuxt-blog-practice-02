<template>
    <div>
        <ShareButtons :post="post"/>
    </div>
</template>

<script>
import ShareButtons from "~/components/post/ShareButtons";
export default {
    props: ['post'],
    components: {
     ShareButtons
  }
}
</script>

<style lang="scss" scoped>

</style>