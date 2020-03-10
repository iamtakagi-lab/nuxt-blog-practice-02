<template>
  <div>
    <div class="markdown-body" v-html="$md.render(post.fields.body)"></div>
  </div>

</template>

<script>
    export default {
        name: "Bodytext",
        props: ["post"]
    }
</script>

<style scoped lang="scss">


</style>
