<script lang="ts" setup>
  const account = {
    title: 'Another Flight',
    subtitle: 'Lovers of new experiences and capturing them.',
    photo: {
      src: '/img/profile-photo.jpg',
      alt: 'Hehehe'
    }
  };
</script>

<template>
  <div class="banner">
    <div class="banner__photo-wrapper">
      <img class="banner__photo" :src="account.photo.src" :alt="account.photo.alt" />
    </div>
    <div class="banner__heading-wrapper">
      <h1 class="banner__title">{{ account.title }}</h1>
      <p class="banner__subtitle">{{ account.subtitle }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .banner {
    padding: 4% 14%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__photo-wrapper {
      max-width: 290px;
    }
    &__photo {
      width: 100%;
      border-radius: 50%;
      -webkit-box-shadow: 8px 8px 24px -4px rgba(0, 0, 0, .5);
      -moz-box-shadow: 8px 8px 24px -4px rgba(0, 0, 0, .5);
      box-shadow: 8px 8px 24px -4px rgba(0, 0, 0, .5);
    }

    &__heading-wrapper {
      text-align: center;
      padding-left: 100px;
    }

    &__title {
      font-size: 66px;
    }

    &__subtitle {
      font-size: 27px;
      margin-top: 14px;
    }
  }
</style>