<template>
  <div class="gallery-image">
    <img v-bind:src="image" v-bind:alt="alt">
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    title: String,
    description: String,
    image: String,
    alt: String
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  img {
    max-width: 50vw;
  }
</style>
