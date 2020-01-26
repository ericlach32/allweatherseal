<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/service">Service</router-link>
      <router-link to="/gallery">Gallery</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

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

#nav {
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
}
</style>
