<template>
  <div class="about" v-if="about_page">
    <HeroTextImage
      v-bind:title='about_page.data.title[0].text'
      v-bind:heading='about_page.data.heading[0].text'
      v-bind:image='about_page.data.hero_image.url'
    />
  </div>
</template>

<script>
import HeroTextImage from '@/components/HeroTextImage.vue'

export default {
  name: 'about',
  components: {
    HeroTextImage
  },
  data () {
    return {
      about_page: null
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'about_page')
      )
      .then((response) => {
        this.about_page = response.results[0]
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>
