<template>
  <div class="loader">
    <div>
      <img src="/images/preloader.gif" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
}
</script>
