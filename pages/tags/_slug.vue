<template>
  <div>
    <div class="content-title">タグ: {{slug}} ({{postsByTag(slug).length}}件)</div>

    <PostPreview
      v-for="(post, i) in postsByTag(slug).slice(getStart, getCurrent)"
      :key="i"
      :post="post"
    />

    <div>
      <nuxt-link
        v-show="hasPrev"
        class="paginate-btn"
        :to="`/tags/${slug}?page=${getPrev}`"
        @click.native="clickCallback(getPrev, slug)"
      >前のページ</nuxt-link>

      <button
        v-show="!hasPrev"
        class="paginate-btn" 
        :class="{ 'is-disabled': true }"
      >前のページ</button>

      <p style="display: inline-flex;">
        {{currentPage}} / {{Math.ceil($store.getters.postsByTag(slug).length / this.parPage)}}
      </p> 

      <nuxt-link
        v-show="(this.currentPage < Math.ceil(this.$store.getters.postsByTag(slug).length / this.parPage))"
        class="paginate-btn"
        :to="`/tags/${slug}?page=${getNext}`"
        @click.native="clickCallback(getNext, slug)"
      >次のページ</nuxt-link>

      <button
        v-show="!(this.currentPage < Math.ceil($store.getters.postsByTag(slug).length / this.parPage))"
        class="paginate-btn"
        :class="{ 'is-disabled': true }"
      >次のページ</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import PostPreview from "~/components/layout/PostPreview";

export default {
  middleware: "getContentful",
  async asyncData({ params, query, error }) {
    return {
      slug: params.slug,
      currentPage: query["page"] === undefined ? 1 : Number(query["page"])
    };
  },
  head() {
    return {
      title: "タグ: " + this.slug + " - manji.fun"
    };
  },
  computed: {
    ...mapGetters(["postsByTag"]),

    getCurrent: function() {
      return this.currentPage * this.parPage;
    },

    getStart: function() {
      let current = this.currentPage * this.parPage;
      return current - this.parPage;
    },

    getPrev: function() {
      return this.currentPage - 1;
    },

    getNext: function() {
      return this.currentPage + 1;
    },

    hasPrev: function() {
      return this.currentPage > 1;
    }
  },
  data() {
    return {
      parPage: 6
    };
  },
  methods: {
    clickCallback(page, slug) {
      this.currentPage = Number(page);
      this.$router.push(`/tags/${slug}?page=${page}`);
    }
  },
  components: {
    PostPreview
  }
};
</script>

<style lang="scss">
</style>