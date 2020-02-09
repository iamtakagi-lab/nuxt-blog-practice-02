<template>
  <header class="header">
    
    <div class="brand-wrapper">
      <BrandAnimation :text="brand" class="brand-name"/>
    </div>

  </header>
</template>

<script>
import $ from "jquery";
import BrandAnimation from "~/components/layout/BrandAnimation";

export default {
  name: "Header",
  components: {
    BrandAnimation
  },
  data() {
    return {
      brand: 'manj!fun',
    }
  },

};
</script>

<style scoped lang = "scss">
@import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');

.header {
  margin: 0 auto;
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  height: 80px;
  max-width: 1080px;
  text-align: center;
  background: white;
  z-index: 3;
  overflow: hidden;

  .brand-wrapper {
    text-align: center;
    height: 80px;
    line-height: 80px;
    z-index: 10000;
    margin: 0 auto;
  }

  .hamburger-wrapper {
    text-align: center;
    height: 70px;
    line-height: 70px;
    z-index: 10000;
    margin: 0 auto;

    /* ズレ修正 */
    margin-top: 20px;

    .hamburger .line {
      position: relative;
      overflow: hidden;
      display: block;
      width: 30px;
      height: 4px;
      background-color: black;
      margin: 8px auto;
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      right: 0;
      border-radius: 10px;

      &:hover {
        cursor: pointer;
      }
    }

    #hamburger-1.is-active .line:nth-child(2) {
      opacity: 0;
    }

    #hamburger-1.is-active .line:nth-child(1) {
      -webkit-transform: translateY(12px) rotate(45deg);
      -ms-transform: translateY(12px) rotate(45deg);
      -o-transform: translateY(12px) rotate(45deg);
      transform: translateY(12px) rotate(45deg);
    }

    #hamburger-1.is-active .line:nth-child(3) {
      -webkit-transform: translateY(-12px) rotate(-45deg);
      -ms-transform: translateY(-12px) rotate(-45deg);
      -o-transform: translateY(-12px) rotate(-45deg);
      transform: translateY(-12px) rotate(-45deg);
    }
  }

  .test-wrapper {
    text-align: center;
    height: 70px;
    line-height: 70px;
    z-index: 10000;
    margin: 0 auto;

    .test-name {
      text-align: center;
      font-family: "M PLUS Rounded 1c", sans-serif;
      font-size: 20px;
      font-weight: 700;
      color: black;
      cursor: pointer;
      text-decoration: none !important;

      &:hover {
        text-decoration: none !important;
      }
    }
  }
}

.slidedown {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px auto;
  position: absolute;
}

ul li {
  list-style: none;
  text-align: center;
}

.menu {
  width: 100%;
  display: inline;

  .item {
    font-size: 20px;
    display: block;
    background: white;
    padding: 10px;
    color: black;
    text-decoration: none;
    box-sizsing: border-box;
    width: 100%;
    height: 45px;
    line-height: 120px;
  }
}
</style>
