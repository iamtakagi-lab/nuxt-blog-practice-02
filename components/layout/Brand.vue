<template>
  <div>
    <nuxt-link to="/">
      <h1 v-for="(t, index) in brand" :key="index" v-text="t" class="brand delay-anime"/>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['brand']
};
</script>

<style lang="stylus" scoped>
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}

.brand {
  display: inline-block;
  min-width: 0.3em;
  font-size: 30px;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
  text-align: center;
  font-family: 'Fredoka One', cursive;
  color: black;
  cursor: pointer;
  text-decoration: none !important;
  fon-weight: 400;

  &:hover {
    text-decoration: none !important;
  }
}

for co in 0 .. 12 {
  .delay-anime:nth-child({co + 1}) {
    animation-delay: co * 100ms + 200ms;
  }
}
</style>