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
  </div>
</template>

<script>
export default {
  methods: {
    showMenu() {
      document.querySelector('[data-nav-mobile]').classList.toggle('active');
    }
  },
  watch:{
    $route ()  {
      document.querySelector('[data-nav-mobile]').classList.remove('active');
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background: #444;
}

h1, h2, h3, h4, h5, p {
  color: #fff;
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
  background: #222;

  a {
    font-weight: bold;
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
    display: flex;
    flex-direction: column;
    background: #222;
    
    .hamburger {
      align-self: flex-start;
      padding: 1rem;
      color: #fff;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }

    &__links {
      display: none;
      flex-direction: column;

      a {
        color: #bbb;
        font-weight: bold;
        text-decoration: none;
        padding: 1rem 0;

        &.router-link-exact-active {
          color: #fff;
        }
      }

      &.active {
        display: flex;
        padding: 2rem 0;
      }
    }
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
