<template>
  <div>
    <Post :post="post"/>
    <ScrolltopButton/>
  </div>
</template>

<script>
import Post from "~/components/post/Post";

export default {
  async asyncData({ params, store }) {
    return {
      post: store.getters.postBySlug(params.slug)
    };
  },
  head() {
    return {
      title: this.post.fields.title + " - manji.fun",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.fields.description
        },
        { hid: "og:url", property: "og:url", content: "https://manji.fun/" },
        {
          hid: "og:title",
          property: "og:title",
          content: this.post.fields.title + " - manji.fun"
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:description",
          property: "og:description",
          content: this.post.fields.description
        },
        { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url + '?fit=scale&w=1920&h=1080'},
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        { hid: "og:site_name", property: "og:site_name", content: "manji.fun" },
        { hid: "og:locale", property: "og:locale", content: "ja_JP" }
      ]
    };
  },
  components: {
    Post
  }
};
</script>

<style lang = "scss">
</style>
