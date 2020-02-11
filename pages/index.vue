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

    <iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=pc_sale&banner=12VBYRNWJMD5YXN0Q4G2&f=ifr&linkID=ed38ae1167962fb28f4ca76c3b737a96&t=manjifun-22&tracking_id=manjifun-22" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none; margin-top: 10px;" frameborder="0"></iframe>
    
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
