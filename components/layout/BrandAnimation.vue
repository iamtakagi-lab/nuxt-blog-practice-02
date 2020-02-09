<template>
  <div>
    <nuxt-link to="/">
      <span v-for="(t, index) in text" :key="index" v-text="t" class="item delay-anime brand" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style lang="stylus" scoped>
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}

.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}

for co in 0 .. 12 {
  .delay-anime:nth-child({co + 1}) {
    animation-delay: co * 100ms + 200ms;
  }
}

.brand {
  text-align: center;
  font-family: 'Fredoka One', cursive;
  font-size: 32px;
  color: black;
  cursor: pointer;
  text-decoration: none !important;

  &:hover {
    text-decoration: none !important;
  }
}
</style>