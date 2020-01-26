<template>
  <div class="hero-background">
    <img class="hero-background__image" v-bind:src="image" alt="All Weather Seal Home Page Hero background image">
    <div class="hero-background__wrapper">
      <h1>{{ title }}</h1>
      <h2>{{ heading }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBackground',
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
  .hero-background {
    position: relative;
    min-height: 500px;

    &__image, &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.32));
      color: #fff;

      h1 {
        font-size: 4.5rem;
        margin: 0;
        padding: 0 1rem;

        @media only screen and (max-width: 768px) {
          font-size: 2.5rem;
        }
      }

      h2 {
        margin-bottom: 0;
        padding: 0 1rem;
      }
    }

    @media only screen and (max-width: 768px) {
      min-height: 300px;
    }
  }
</style>

