<template>
  <div>
    <nuxt-link class="article no-decoration no-selection" :to="linkTo('posts', post.fields.slug)">
      <div class="post-preview-image">
        <img :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=1920&h=1080'" class="post-preview-image"/>
        <p
          class="category"
          style="
          position: absolute;
          top: 5px;
          left: 5px;
          display: inline-block;"
        >
        {{post.fields.category}}
        </p>
      </div>

      <div class="text-content">
        <h2 class="title">{{ post.fields.title }}</h2>
        <p
          class="description"
        >{{ post.fields.description.length >= 30 ? post.fields.description.substring(0, 30) + "..." : post.fields.description }}</p>
        <p class="date">{{ new Date(post.fields.publishDate) | format-date }}</p>
         <p
          class="date"
          v-show="post.fields.lastUpdateDate"
        >{{ new Date(post.fields.lastUpdateDate) | from-now}}に更新されました</p>
        <div class="tags">
          <p
            v-for="(tag, i) in post.fields.tags"
            :key="i"
            class="tag"
            style="
           position: relative;
           display: inline-block;
           margin: 4px;"
          >
           <font-awesome-icon icon="tags" style="font-size: 13px"/>
           {{ tag }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
    
<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: ["post"],
  computed: {
    ...mapGetters(["linkTo"])
  }
};
</script>

<style lang="scss">
</style>