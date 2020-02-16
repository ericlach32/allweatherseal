<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <div class="gallery__wrapper">
      <div v-for="(gallery_image, key) in gallery_images" v-bind:key='key' class="gallery__image">
        <div @click="showPopup">
          <GalleryImage
            v-bind:title='gallery_image.data.title[0].text'
            v-bind:description='gallery_image.data.description[0].text'
            v-bind:image='gallery_image.data.image.url'
            v-bind:alt='gallery_image.data.image.alt'
          />
        </div>
      </div>
    </div>
    <div class="gallery-popup" data-gallery-popup>
      <img src="https://placehold.it/1080x1080.jpg" alt="">
      <span class="gallery-popup__close">&times;</span>
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
    },
    showPopup(e) {
      let wrapper = document.querySelector('[data-gallery-popup]')
      wrapper.classList.add("active");
      wrapper.querySelector("img").setAttribute("src", e.target.src);
      document.querySelector("body").style.overflowY = 'hidden';
    },
    addListener() {
      document.addEventListener("click", (e) => {
        if(!e.target.classList.contains('gallery-image__image')) {
          document.querySelector('[data-gallery-popup]').classList.remove("active");
          document.querySelector("body").style.overflowY = 'scroll';
          let wrapper = document.querySelector('[data-gallery-popup]')
          wrapper.querySelector("img").setAttribute("src", "");
        }
      });
    }
  },
  created () {
    this.getContent()
    this.addListener()
  }
}
</script>

<style lang="scss" scoped>
  .gallery {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 1rem;
    }
    &__image {
      width: 33%;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }

  .gallery-popup {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity .74s cubic-bezier(0.215, 0.610, 0.355, 1);
    z-index: 1000;

    &.active {
      visibility: visible;
      opacity: 1;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.95);
      left: 0;
      top: 0;
    }

    &__close {
      position: absolute;
      right: 2rem;
      top: 1rem;
      color: white;
      font-size: 2rem;
      font-weight: 700;

      @media only screen and (max-width: 768px) {
        font-size: 2.74rem;
        right: .75rem;
        top: 0;
      }
    }

    img {
      max-height: 77%;
      max-width: 100%;
      object-fit: cover;
    }
  }
</style>
