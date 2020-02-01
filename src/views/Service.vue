<template>
  <div class="service" v-if="service_page">
    <HeroTextImage
      v-bind:title='service_page.data.title[0].text'
      v-bind:heading='service_page.data.heading[0].text'
      v-bind:image='service_page.data.hero_image.url'
    />
  </div>
</template>

<script>
import HeroTextImage from '@/components/HeroTextImage.vue'

export default {
  name: 'service',
  components: {
    HeroTextImage
  },
  data () {
    return {
      service_page: null
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'service_page')
      )
      .then((response) => {
        this.service_page = response.results[0]
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>
