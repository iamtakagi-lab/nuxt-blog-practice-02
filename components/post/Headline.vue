<template>
  <div>
    <div class="headline">
      <div class="top">
        <nuxt-link
          :to="linkTo('categories', post.fields.category)"
          class="category"
        >{{post.fields.category}}</nuxt-link>
        <p class="date">投稿: {{ new Date(post.fields.publishDate) | format-date }}</p>
        <p
          class="date"
          v-show="post.fields.lastUpdateDate"
        >更新: {{ new Date(post.fields.lastUpdateDate) | format-date }} 
        ({{ new Date(post.fields.lastUpdateDate) | from-now}})</p>
      </div>

      <h1 class="headline-title">{{post.fields.title}}</h1>
      <p class="headline-description">{{post.fields.description}}</p>
      <div class="tags">
        <nuxt-link
          v-for="tag in post.fields.tags"
          :key="tag"
          :to="linkTo('tags', tag)"
          class="tag"
          style="
           position: relative;
           display: inline-block;
           margin: 4px;"
        >
          <font-awesome-icon icon="tags" style="font-size: 13px" />
          {{ tag }}
        </nuxt-link>
      </div>
    </div>

     <ShareButtons :post="post"/>

      <img
        :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=1920&h=1080'"
        class="img"
      />
  </div>
</template>

<script>
import ShareButtons from "~/components/post/ShareButtons";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Headline",
  props: ["post"],
  computed: {
    ...mapGetters(["linkTo"])
  },
  components: {
    ShareButtons
  }
};
</script>

<style scoped lang="scss">

.img {
    margin-top: 20px;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    position: relative;
}

.headline {
  padding: 20px;
  top: 10px;
  left: 10px;

  .headline-title {
    font-size: 22px;
    text-decoration: none !important;
    margin-top: 15px;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    &:hover {
      text-decoration: none !important;
    }
  }

  .headline-description {
    color: #6c7077;
    font-size: 14px;
    text-decoration: none !important;
    margin-top: 15px;

    &:hover {
      text-decoration: none !important;
    }
  }

  .tags {
    margin-top: 20px;
  }

  .top {
    display: inline-flex;

    .date {
      margin-left: 10px;
      color: grey;
      font-size: 15px;
    }
  }
}
</style>
