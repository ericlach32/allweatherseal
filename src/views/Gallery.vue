<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <div v-for="(gallery_image, key) in gallery_images" v-bind:key='key'>
      <GalleryImage
        v-bind:title='gallery_image.data.title[0].text'
        v-bind:description='gallery_image.data.description[0].text'
        v-bind:image='gallery_image.data.image.url'
        v-bind:alt='gallery_image.data.image.alt'
      />
    </div>
  </div>
</template>


<script>

import GalleryImage from '@/components/GalleryImage.vue'

export default {
  name: 'gallery',
  components: {
    GalleryImage
  },
  data () {
    return {
      gallery_images: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'gallery_image')
      )
      .then((response) => {
        this.gallery_images = response.results
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style lang="scss" scoped>
  
</style>
