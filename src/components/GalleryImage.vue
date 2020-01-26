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
  .gallery-image {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem;

    img {
      object-fit: cover;
      max-width: 100%;
      max-height: 350px;
      height: 100%;

      @media only screen and (max-width: 768px) {

      }
    }
  }
</style>
