<template>
  <div class="home" v-if="home_page">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="All Weather Seal"/> -->

    <h1>{{ home_page.data.title[0].text }}</h1>
    <h2>{{ home_page.data.heading[0].text }}</h2>
    <h3>{{ home_page.data.subheading[0].text }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {},
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
