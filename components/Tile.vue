<script lang="ts" setup>
import getMonthNameByNumber from '~~/helpers/getMonthNameByNumber';

interface Tile {
  title: string;
  daysCounter: number;
  month: number;
  year: number;
  path: string;
  image: {
    src: string;
    alt: string;
    // width: number;
    // offset: {
    //   left: number;
    //   top: number;
    // }
  };
};

const tile = defineProps<Tile>()
</script>

<template>
  <nuxt-link class="tile" :to="tile.path">
    <div class="tile__image-wrapper">
      <img 
        class="tile__image" 
        :src="tile.image.src"
        :alt="tile.image.alt"
      />
    </div>
    <div class="tile__text-wrapper">
      <h3 class="tile__title">{{ tile.title }}</h3>
      <p class="tile__subtitle">
        {{ tile.daysCounter }} days | {{ getMonthNameByNumber(tile.month) }} {{ tile.year }}
      </p>
    </div>
  </nuxt-link>
</template>

<style lang="scss">
  .tile {
    width: 100%;
    height: 400px;
    display: block;
    position: relative;
    color: #b9b9b9;
    overflow: hidden;
    -webkit-box-shadow: 8px 8px 24px -4px rgba(0, 0, 0, .3);
    -moz-box-shadow: 8px 8px 24px -4px rgba(0, 0, 0, .3);
    box-shadow: 8px 8px 24px -4px rgba(0, 0, 0, .3);
    transition: transform 0.5s;
    
    &__image-wrapper {
      height: 100%;
      overflow: hidden;
      border-radius: 9px;
      position: relative;

      &:after {
        content: '';
        display: block;
        position: absolute;
        height: 50%;
        width: 100%;
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8));
        bottom: 0;
      }
    }
    &__image {
      position: relative;
      width: 100%;
      top: -107px;
    }

    &__text-wrapper {
      position: absolute;
      bottom: 30px;
      width: 100%;
      text-align: center;
    }

    &__title {
      font-size: 48px;
      transition: .5s transform;
    }

    &__subtitle {
      margin-top: 7px;
      font-size: 21px;
      transition: .5s transform, .5s opacity;
    }

    &:hover {
      transform: scale(108%);
      .tile__title {
        transform: translateY(50%);
      }
      .tile__subtitle {
        transform: translateY(100%);
        opacity: 0;
      }
    }
  }
</style>
