<template>
  <div class="contact" v-if="contact_page">
    <h1>{{ contact_page.data.title[0].text }}</h1>
    <h2>{{ contact_page.data.heading[0].text }}</h2>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'contact',
  components: {
    Footer
  },
  data () {
    return {
      contact_page: null
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'contact_page')
      )
      .then((response) => {
        this.contact_page = response.results[0]
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 25rem;
}
</style>

