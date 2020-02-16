<template>
  <div class="hero-background">
    <img class="hero-background__image" v-bind:src="image" alt="All Weather Seal Home Page Hero background image">
    <div class="hero-background__wrapper">
      <img src="../assets/AWS.png" class="hero-background__logo" alt="All Weather Seal logo">
      <div>
        <h1>{{ title }}</h1>
        <h2>{{ heading }}</h2>
      </div>
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

    &__logo {
      max-width: 30vw;
      max-height: 90%;
      padding: 0 30px;

      @media only screen and (max-width: 768px) {
        max-width: 50vw;
        max-height: 50%;
        padding: 0;
      }
    }

    &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.32));
      color: #fff;

      div {
        text-align: left;

        h1 {
          font-size: 4.5rem;
          margin: 0;
          padding: 0 1rem;

          @media only screen and (max-width: 768px) {
            font-size: 2.5rem;
            margin-top: 30px;
          }
        }

        h2 {
          margin-bottom: 0;
          padding: 0 1rem;
        }

        @media only screen and (max-width: 768px) {
          text-align: center;
        }
      }

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }
    }

    @media only screen and (max-width: 768px) {
      min-height: none;
    }
  }
</style>

