<template>
  <div>
    <div class="box">
      <div class="box-title">月間ランキング</div>

      <nuxt-link
        v-for="(topPost, i) in topPosts"
        :key="i"
        :to="linkTo('posts', topPost.slug)"
        class="top-post no-decoration no-selection"
      >
        <div class="top-post-image">
          <img
            :src="topPost.post.fields.heroImage.fields.file.url + '?fit=scale&w=1920&h=1080'"
            class="top-post-image"
          />

          <p
            class="rank"
            style="
          position: absolute;
          top: 4px;
          left: 4px;
          display: inline-block;"
          >{{i+=1}}位</p>
        </div>

        <div class="text-content">
          <h2 class="title">{{ topPost.post.fields.title }}</h2>

          <p class="date">{{ new Date(topPost.post.fields.publishDate) | format-date }}</p>
        </div>
      </nuxt-link>
    </div>

    <div class="box">
      <div class="box-title">最近の記事</div>
      <nuxt-link
        v-for="(post, i) in postsByLimit(5)"
        :key="i"
        :to="linkTo('posts', post.fields.slug)"
        class="recent-post no-decoration no-selection"
      >
        <div class="recent-post-image">
          <img
            :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=1920&h=1080'"
            class="recent-post-image"
          />
        </div>

        <div class="text-content">
          <h2 class="title">{{ post.fields.title }}</h2>

          <p class="date">{{ new Date(post.fields.publishDate) | format-date }}</p>
        </div>
      </nuxt-link>
    </div>

    <div class="box">
      <div class="box-title">タグ</div>
      <p>
        <nuxt-link
          v-for="(tag, i) in tags"
          :key="i"
          class="tag"
          style="
      position: relative;
      display: inline-block;
      margin-right: 4px;
      margin-bottom: 2px;"
          :to="linkTo('tags', tag)"
        >
          <font-awesome-icon icon="tags" style="font-size: 13px" />
          {{tag}}
        </nuxt-link>
      </p>
    </div>

    <div class="box">
      <div class="box-title">カテゴリ</div>
      <p>
        <nuxt-link
          v-for="(category, i) in categories"
          :key="i"
          :to="linkTo('categories', category)"
          class="category"
          style="
      position: relative;
      display: inline-block;
      margin-right: 4px;
      margin-bottom: 2px;"
        >{{category}}</nuxt-link>
      </p>
    </div>

    <Archive/>


      <iframe style="width:120px;height:240px;margin-left:10px;margin-top:10px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=manjifun-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B084HPGQ9W&linkId=ca23fda1539c8e2e6a96d4345990c087&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
      </iframe>

      <iframe style="width:120px;height:240px;margin-left:10px;margin-top:10px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=manjifun-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B077SHM6W6&linkId=f3f049a161f6f4c20c922b76503c5fa0&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
    </iframe>
  
    
  </div>
</template>

<script>
import Archive from "~/components/layout/Archive";
import { mapState, mapGetters } from "vuex";
export default {
  middleware: "getContentful",
  computed: {
    ...mapState(["tags"]),
    ...mapState(["categories"]),
    ...mapState(["topPosts"]),
    ...mapGetters(["linkTo"]),
    ...mapGetters(["postsByLimit"])
  },
  components: {
    Archive
  }
};
</script>

<style lang="scss" scoped>
</style>