<template>
  <div>
    <div class="post">
      <Headline :post="post"/>
      <Bodytext :post="post"/>
      <Footerline :post="post"/>
    </div>
  </div>
</template>

<script>
import Headline from "~/components/post/Headline";
import Bodytext from "~/components/post/Bodytext";
import Footerline from "~/components/post/Footerline";

export default {
  name: "Post",
  components: { Headline, Bodytext, Footerline },
  props: ["post"]
};
</script>

<style scoped lang = "scss">
.post {
  margin-top: 10px;
  background: white;
  max-width: 100%;
  border-radius: 1em;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
}
</style>
