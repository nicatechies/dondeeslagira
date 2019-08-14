<template>
    <b-card :title="item.title">
    </b-card>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class Event extends Vue {
    @Prop() public item!: string;

  }
</script>

<style scoped>

</style>