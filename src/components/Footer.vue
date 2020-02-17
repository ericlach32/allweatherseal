<template>
  <div class="footer">
    <img src="../assets/AWS.png" class="footer__logo" alt="All Weather Seal logo">
    <div class="footer__title">
      <h3>All Weather Seal</h3>
      <a href="tel:6134439000">(613) 443 - 9000</a>
    </div>
    <div class="footer__links">
      <router-link to="/about">About</router-link>
      <router-link to="/service">Service</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="footer__copy">
      <h3>&copy; {{ new Date().getFullYear() }} All Weather Seal</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 6rem;
  height: 200px;
  background: #111;
  display: flex;
  flex-direction: row;
  justify-content:  space-evenly;
  padding-bottom: 4rem;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;

    a { 
      color: #fff;
      text-decoration: none;
      font-family: 'Bebas Neue', 'Avenir', Helvetica, Arial, sans-serif;
      font-size: 1.2rem;
      margin: 0;
      padding: 0;
    }

    h3 {
      margin: 0;
      padding: 0;
    }
  }

  &__links {
    a {
      margin-bottom: 1rem !important;
    }

    @media only screen and (max-width: 768px) {
      display: none !important;
    } 
  }

  &__title {
    h3 {
      margin-bottom: 1rem !important;
    }

    @media only screen and (max-width: 768px) {
      justify-content: center;

      h3, a {
        width: 100%;
      }
    }
  }

  &__copy {
    @media only screen and (max-width: 768px) {
      padding-top: 1rem !important;

      h3 {
        width: 100%;
      }
    }
  }

  &__logo {
    display: flex;
    align-self: center;
    height: 150px;

    @media only screen and (max-width: 768px) {
      padding-top: 1rem;
    }
  } 

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding-bottom: 2rem;
  }
}
</style>
