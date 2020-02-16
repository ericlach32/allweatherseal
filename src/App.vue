<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/service">Service</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="nav-mobile">
      <div class="hamburger" v-on:click="showMenu">&#9776;</div>
      <div class="nav-mobile__links" data-nav-mobile>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/service">Service</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <img src="./assets/AWS.png" class="footer__logo" alt="All Weather Seal logo">
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
  </div>
</template>

<script>
export default {
  methods: {
    showMenu() {
      document.querySelector('[data-nav-mobile]').classList.toggle('active');
    },
    scrollListener() {
      window.addEventListener('scroll', () => {
        document.querySelector('[data-nav-mobile]').classList.remove('active');
      });
    },
  },
  watch:{
    $route ()  {
      document.querySelector('[data-nav-mobile]').classList.remove('active');
    }
  },
  created() {
    this.scrollListener();
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Archivo+Black|Bebas+Neue|Heebo&display=swap');

body {
  margin: 0;
  background: #444;
}

h1, h3 {
  color: #fff;
  font-family: 'Bebas Neue', 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: normal;
}

h2, h4, h5 {
  color: #fff;
  font-family: 'Archivo Black',  'Avenir', Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 130%;
}

p {
  color: #fff;
  font-family: 'Heebo', 'Avenir', Helvetica, Arial, sans-serif;
}

h1 {
  margin-top: 4rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  background: #111;

  a {
    font-family: 'Bebas Neue', 'Avenir', Helvetica, Arial, sans-serif;
    color: #bbb;
    padding: 0 1rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
}

.nav-mobile {
  display: none;

  @media only screen and (max-width: 768px) {
    position: sticky;
    display: flex;
    flex-direction: column;
    z-index: 100;
    background: #111;
    width: 100%;
    top: 0;
    
    .hamburger {
      align-self: flex-start;
      padding: 1rem;
      color: #fff;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    &__links {
      position: fixed;
      display: none;
      flex-direction: column;
      align-items: center;
      background: #111;
      width: 100%;
      margin-top: 3rem; 

      a {
        color: #bbb;
        font-weight: bold;
        text-decoration: none;
        padding: 1.5rem 2rem;
        font-size: 1.5rem;
        width: fit-content;

        &.router-link-exact-active {
          color: #fff;
        }
      }

      &.active {
        display: flex;
        padding-bottom: 4rem;
      }
    }
  }
}

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

.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}
</style>
