<template>
  <div class="home" v-if="home_page">

    <HeroBackground
      v-bind:title='home_page.data.title[0].text'
      v-bind:heading='home_page.data.heading[0].text'
      v-bind:image='home_page.data.hero_image.url'
    />

    <h3>{{ home_page.data.subheading[0].text }}</h3>

  </div>
</template>

<script>
// @ is an alias to /src
import HeroBackground from '@/components/HeroBackground.vue'

export default {
  name: 'home',
  components: {
    HeroBackground
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
