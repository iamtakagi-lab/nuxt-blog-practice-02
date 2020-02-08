<template>
  <div class="flex">
    <main class="main-container">
      <nuxt-link
        class="article no-decoration no-selection"
        v-for="(post, i) in postsByLimit(6)"
        :key="i"
        :to="linkTo('posts', post.fields.slug)"
      >
        <div class="image">
          <img :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=230'" />
          <p
            class="category"
            style="
          position: absolute;
          top: 5px;
          left: 5px;
          display: inline-block;"
          >{{post.fields.category}}</p>
        </div>

        <div class="text-content">
          <h2 class="title">{{ post.fields.title }}</h2>
          <p
            class="description"
          >{{ post.fields.description.length >= 30 ? post.fields.description.substring(0, 30) + "..." : post.fields.description }}</p>
          <p class="publish-date">{{ new Date(post.fields.publishDate) | format-date }}</p>
          <div class="tags">
            <p
              v-for="(tag, i) in post.fields.tags"
              :key="i"
              class="tag"
              style="
           position: relative;
           display: inline-block;
           margin: 4px;"
            >{{ tag }}</p>
          </div>
        </div>
      </nuxt-link>
    </main>

    <aside class="side-container">

      <div class="box">
        <div class="box-title">今月の人気記事</div>
        <nuxt-link v-for="(topPost, i) in topPosts" :key="i" :to="linkTo('posts', topPost.slug)"  class="top-post no-decoration no-selection">
          <div class="image">
          <img :src="topPost.post.fields.heroImage.fields.file.url + '?fit=scale&w=230'" />
          
          <p
            class="pv"
            style="
          position: absolute;
          top: 4px;
          left: 4px;
          display: inline-block;"
          >{{topPost.pv}}PV</p>
        </div>


        <div class="text-content">

          <h2 class="title">{{ topPost.post.fields.title }}</h2>
    
          <p class="publish-date">{{ new Date(topPost.post.fields.publishDate) | format-date }}</p>
          
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
          >{{tag}}</nuxt-link>
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
    </aside>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  middleware: "getContentful",
  computed: {
    ...mapState(["tags"]),
    ...mapState(["categories"]),
    ...mapState(["topPosts"]),
    ...mapGetters(["postsByLimit"]),
    ...mapGetters(["linkTo"]),
    ...mapGetters(["postBySlug"])
  },
  components: {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
