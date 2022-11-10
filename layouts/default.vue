<template>
  <div class="layout">
    <Header />
  <slot></slot>
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
    background-color: #2a2f33;
    color: #c0c0c0;
  }
</style>