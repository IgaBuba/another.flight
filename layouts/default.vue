<template>
  <div class="layout">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    font-family: Ubuntu;
  }

  a {
    text-decoration: none;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  body {
    background-color: #08090a;
    color: #c0c0c0;
  }

</style>