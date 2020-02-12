<template>
  <div>

    <PostPreview
      v-for="(post, i) in $store.state.posts.slice(getStart, getCurrent)"
      :key="i"
      :post="post"
    />

    <div>
      <nuxt-link
        v-show="hasPrev"
        class="paginate-btn"
        :to="`/?page=${getPrev}`"
        @click.native="clickCallback(getPrev)"
      >前のページ</nuxt-link>

      <nuxt-link
        v-show="(this.currentPage < Math.ceil($store.state.posts.length / this.parPage))"
        class="paginate-btn"
        :to="`/?page=${getNext}`"
        @click.native="clickCallback(getNext)"
      >次のページ</nuxt-link>
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
  data() {
    return {
      parPage: 5
    };
  },
  computed: {
    ...mapState(['posts']),

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
  methods: {
    clickCallback(page) {
      this.currentPage = Number(page);
      this.$router.push(`/?page=${page}`);
    }
  },
  components: { PostPreview }
};
</script>

<style scoped lang="scss">
</style>
