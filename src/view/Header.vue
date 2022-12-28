<template>
  <div class="wrapper">
    <h1>SCOTLAND YARD</h1>
    <div class="xmas-title">
      <span>CASO DE NATAL DA CYNTIA</span>
    </div>
    <div class="line"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeaderView extends Vue {
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Kumar+One');
@import url('https://fonts.googleapis.com/css?family=Katibeh');

h1 {
  font-family: 'Kumar One', sans-serif;
  font-size: 1.5em;
  line-height: 1em;
  color: #bfad0c;
  -webkit-text-stroke: 1px white;
  margin-bottom: 10px;
}

.wrapper {
  text-align: center;
}

.xmas-title {
  font-family: 'Katibeh', sans-serif;
  background-image: url('/img/header.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;

  span {
    font-size: 1em;
    color: #bf0c0c;
    -webkit-text-stroke: 1px white;
    margin-top: 19px;
    vertical-align: sub;
  }
}

.line {
  margin-top: 12px;
  border-bottom: 1px solid #fbefef;
}

</style>
