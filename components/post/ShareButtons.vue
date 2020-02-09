<template>
  <div class="buttons">
    <div class="twitter-button">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </div>
    <div class="line-button">
      <font-awesome-icon :icon="['fab', 'line']" />
    </div>
    <div class="facebook-button">
      <font-awesome-icon :icon="['fab', 'facebook-f']" />
    </div>
    <div class="pocket-button">
      <font-awesome-icon :icon="['fab', 'get-pocket']" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.buttons {
  display: inline-flex;
  width: 100%;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;

  .twitter-button {
    width: 100%;
    transition: all 300ms;
    font-size: 32px;
    border-top: 1px #444;
    border-bottom: 1px #444;
    background: white;
    color: black;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    &:hover {
      background: #00aced;
      color: white;
    }
  }

  .line-button {
    width: 100%;
    transition: all 300ms;
    font-size: 32px;
    border-top: 1px #444;
    border-bottom: 1px #444;
    background: white;
    color: black;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    &:hover {
      background: #00b900;
      color: white;
    }
  }

  .facebook-button {
    width: 100%;
    transition: all 300ms;
    font-size: 32px;
    border-top: 1px #444;
    border-bottom: 1px #444;
    background: white;
    color: black;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    &:hover {
      background: #3b5998;
      color: white;
    }
  }

  .pocket-button {
    width: 100%;
    transition: all 300ms;
    font-size: 32px;
    border-top: 1px #444;
    border-bottom: 1px #444;
    background: white;
    color: black;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    &:hover {
      background: #ef4056;
      color: white;
    }
  }
}
</style>