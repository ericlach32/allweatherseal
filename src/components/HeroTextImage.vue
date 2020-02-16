<template>
  <div class="hero-text-image">
    <div class="hero-text-image__back"></div>
    <img class="hero-text-image__image" v-bind:src="image" alt="All Weather Seal Hero image">
    <div class="hero-text-image__wrapper">
      <h1>{{ title }}</h1>
      <p>{{ heading }}</p>
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
    position: relative;

    &__image {
      max-height: 500px;
      width: 50%;
      object-fit: cover;
      border-bottom-right-radius: 1rem;

      @media only screen and (max-width: 768px) {
        max-height: 250px;
        width: 100%;
        border-bottom-right-radius: 0;
      }
    }

    &__back {
      position: absolute;
      z-index: -10;
      width: 50%;
      height: 100%;
      top: 7px;
      left: -14px;
      background: #eee;
      border-bottom-right-radius: 1rem;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 3rem;
      width: calc(50% - 6rem);
      text-align: left;

      h1 {
        margin: 0;
        font-size: 2.5rem;
        text-decoration: underline;
        text-underline-position: under;

        @media only screen and (max-width: 768px) {
          margin-top: 2rem;
          margin-bottom: 0;
        }
      }

      p {
        font-size: 1.5rem;
        line-height: 160%;
        margin-bottom: 0;
      }

      @media only screen and (max-width: 768px) {
        padding: 0 1rem;
        width: calc(100% - 2rem);
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
</style>

