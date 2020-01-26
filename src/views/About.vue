<template>
  <div class="about" v-if="about_page">
    <h1>{{ about_page.data.title[0].text }}</h1>
    <h2>{{ about_page.data.heading[0].text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {},
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
