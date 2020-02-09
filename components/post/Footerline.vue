<template>
    <div class="footerline">
        <ShareButtons :post="post"/>
        <div class="footerline-content">
            <nuxt-link to="/" class="no-decoration no-selection" style="color: black;">記事一覧に戻る</nuxt-link>
        </div>
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
    .footerline {
        text-align: center;

        .footerline-content {
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 20px;
        }
    }
</style>