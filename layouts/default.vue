<template>
  <div>
    <Header/>

    <div class="flex">

      <main class="main-container">
        <nuxt/>
      </main>

      <Aside/>
    </div>
  </div>
</template>

<script>
import Header from "~/components/layout/Header";
import Aside from "~/components/layout/Aside";

export default {
  components: {
    Header,
    Aside
  }
};
</script>

<style lang="scss">

</style>
