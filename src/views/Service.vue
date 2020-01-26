<template>
  <div class="service" v-if="service_page">
    <h1>{{ service_page.data.title[0].text }}</h1>
    <h2>{{ service_page.data.heading[0].text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'service',
  components: {},
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
