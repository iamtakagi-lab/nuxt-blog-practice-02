<template>
  <div>
    <div v-if="year !== -1 && month !== -1">  
      <div class="content-title">{{year}}年{{month}}月のアーカイブ ({{$store.getters.postsByYearMonth(year, month).length}}件)</div>

      <PostPreview
        v-for="(post, i) in $store.getters.postsByYearMonth(year, month).slice(getStart, getCurrent)"
        :key="i"
        :post="post"
      />

      <div>
        <nuxt-link
          v-show="hasPrev"
          class="paginate-btn"
          :to="`/archive/${year}/${month}/?page=${getPrev}`"
          @click.native="clickCallback(getPrev)"
        >前のページ</nuxt-link>

        <nuxt-link
          v-show="(this.currentPage < Math.ceil($store.getters.postsByYearMonth(year, month).length / this.parPage))"
          class="paginate-btn"
          :to="`/archive/${year}/${month}/?page=${getNext}`"
          @click.native="clickCallback(getNext)"
        >次のページ</nuxt-link>
      </div>
    </div>

    <div v-else>
      <div class="content-title">{{year}}年のアーカイブ　({{$store.getters.postsByYear(year).length}}件)</div>

      <PostPreview
        v-for="(post, i) in $store.getters.postsByYear(year).slice(getStart, getCurrent)"
        :key="i"
        :post="post"
      />

      <div>
        <nuxt-link
          v-show="hasPrev"
          class="paginate-btn"
          :to="`/archive/${year}/?page=${getPrev}`"
          @click.native="clickCallback(getPrev)"
        >前のページ</nuxt-link>

        <nuxt-link
          v-show="(this.currentPage < Math.ceil($store.getters.postsByYear(year).length / this.parPage))"
          class="paginate-btn"
          :to="`/archive/${year}/?page=${getNext}`"
          @click.native="clickCallback(getNext)"
        >次のページ</nuxt-link>
      </div>
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
       year: params.year === undefined ? -1 : Number(params.year),
       month: params.month === undefined ? -1 : Number(params.month),
       currentPage: query["page"] === undefined ? 1 : Number(query["page"])
    }
  },
  data() {
    return {
      parPage: 8
    };
  },
  computed: {
    ...mapGetters(["postsByYear"]),
    ...mapGetters(["postsByYearMonth"]),

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
    },
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

<style lang="scss" scoped>
</style>