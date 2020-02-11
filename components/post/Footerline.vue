<template>
    <div class="footerline">
        <ShareButtons :post="post"/>
        
        <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=manjifun-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B01BEPNPF6&linkId=c6570c1dc4506c9ede6f1e6fe25eb4ef&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
        <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=manjifun-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B004N3APGO&linkId=6f439babb2c8be6f798eb07e883b1434&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
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