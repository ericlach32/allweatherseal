<template>
  <div class="hero-text-image">
    <img class="hero-text-image__image" v-bind:src="image" alt="All Weather Seal Hero image">
    <div class="hero-text-image__wrapper">
      <h1>{{ title }}</h1>
      <h2>{{ heading }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroTextImage',
  props: {
    title: String,
    heading: String,
    image: String
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .hero-text-image {
    display: flex;

    &__image {
      max-height: 500px;
      width: 50%;
      object-fit: cover;

      @media only screen and (max-width: 768px) {
        max-height: 250px;
        width: 100%;
      }
    }
    
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 2rem;

      h1 {
        font-size: 2.5rem;
        margin: 0;

        @media only screen and (max-width: 768px) {
          margin-top: 2rem;
          margin-bottom: 0;
        }
      }

      h2 {
        font-size: 1.5rem;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
</style>

