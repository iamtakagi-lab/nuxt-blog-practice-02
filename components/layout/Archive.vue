<template>
  <div class="box">
    <div class="box-title">月別アーカイブ</div>

    <nav id="accordion">
      <ul>
        <li> 
            <span id="toggle">▶
               <nuxt-link :to="`/archive/2020`">2020年 ({{postsByYear(2020).length}})</nuxt-link>
            </span>
       
          <ul class="close">
            <li v-for="month in new Date().getMonth()+1" :key="month">
            <nuxt-link :to="`/archive/2020/${month}`">2020年{{month}}月 ({{postsByYearMonth(2020, month).length}})</nuxt-link>
            </li>
          </ul>

        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["postsByYear"]),
    ...mapGetters(["postsByYearMonth"])
  }
};

if (process.browser) {
  $(function() {
    $("#accordion li span").click(function() {
      const span = $("#toggle");
      $(this)
        .next("ul")
        .slideToggle(100, function() {
          if ($(this).is(":visible")) {
            //非表示中
            //span.text(span.text().replace("▶", "▼"));
          } else {
            // 表示中の処理
            //span.text(span.text().replace("▼", "▶"));
          }
        });
    });
  });
}
</script>

<style lang="scss" scoped>
span {
  font-size: 14px;
}

a {
  font-size: 14px;
}

ul li {
  list-style: none;
  cursor: pointer;
}

.close {
  display: none;
}
</style>