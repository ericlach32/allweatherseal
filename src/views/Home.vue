<template>
  <div class="home" v-if="home_page">

    <HeroBackground
      v-bind:title='home_page.data.title[0].text'
      v-bind:heading='home_page.data.heading[0].text'
      v-bind:image='home_page.data.hero_image.url'
    />

    <div class="container">
      <h3>{{ home_page.data.subheading[0].text }}</h3>

      <ImageTextBlock
        v-bind:heading='home_page.data.block_heading_1[0].text'
        v-bind:subheading='home_page.data.block_subheading_1[0].text'
        v-bind:image='home_page.data.block_image_1.url'
      />

      <ImageTextBlock
        v-bind:heading='home_page.data.block_heading_2[0].text'
        v-bind:subheading='home_page.data.block_subheading_2[0].text'
        v-bind:image='home_page.data.block_image_2.url'
        v-bind:reverse='true'
      />

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HeroBackground from '@/components/HeroBackground.vue'
import ImageTextBlock from '@/components/ImageTextBlock.vue'

export default {
  name: 'home',
  components: {
    HeroBackground,
    ImageTextBlock
  },
  data () {
    return {
      home_page: null
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'home_page')
      )
      .then((response) => {
        this.home_page = response.results[0]
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 4rem;
  font-size: 2.5rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    text-align: left;

    margin-top: 1rem;
    margin-bottom: 0;
  }
}
</style>

