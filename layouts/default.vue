<template>
  <div>
    <Header />

    <div class="flex">
      <main class="main-container">
        <nuxt/>
      </main>

      <aside class="aside-container">
        <Aside/>
      </aside>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/layout/Header";
import Aside from "~/components/layout/Aside";
import Footer from "~/components/layout/Footer";

export default {
  components: {
    Header,
    Aside,
    Footer
  }
}
</script>

<style lang="scss">

</style>