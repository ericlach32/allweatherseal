<template>
  <div v-bind:class="{ reverse: reverse }" class="image-text-block">
    <div class="image-text-block__content">
      <h4 class="text-left">{{ heading }}</h4>
      <p class="text-left">{{ subheading }}</p>
    </div>
    <div class="image-text-block__image">
      <img v-bind:src="image" alt="All Weather Seal imagery">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageTextBlock',
  props: {
    heading: String,
    subheading: String,
    image: String,
    reverse: Boolean
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.image-text-block {
  display: flex;
  flex-direction: row;
  margin: 4rem 0;

  &.reverse {
    flex-direction: row-reverse;

    .image-text-block__content {
      padding-left: 4rem;
      padding-right: 0;
    }
  }

  &__image, &__content {
    @media only screen and (min-width: 768px) {
      width: 50%;
    }
  }

  &__image {   
    img {
      max-width: 100%;
      max-height: 250px;
      object-fit: cover;
      width: 100%;

      @media only screen and (min-width: 768px) {
        max-height: 350px;
      }
    }
  }

  &__content {
    padding-right: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      align-self: flex-start;
      margin: 0;
      font-size: 2rem;
    }

    p {
      font-size: 1.47rem;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column !important;
    margin: 2rem 0;

    .image-text-block__content {
      padding: 0 !important;
    }
  }
}
</style>

