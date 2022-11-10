<script lang="ts" setup>
import type { Tile } from '../types/index';

  const tiles: Tile[] = [
    {
      title: 'Liguria',
      daysCounter: 7,
      month: 6,
      path: '/trips/liguria',
      image: {
        src: '/img/trips/thumbnails/liguria.jpg',
        alt: 'Liguria'
      }
    },
    {
      title: 'Liguria',
      daysCounter: 7,
      month: 6,
      path: '/trips/liguria',
      image: {
        src: '/img/trips/thumbnails/liguria.jpg',
        alt: 'Liguria'
      }
    },
    {
      title: 'Liguria',
      daysCounter: 7,
      month: 6,
      path: '/trips/liguria',
      image: {
        src: '/img/trips/thumbnails/liguria.jpg',
        alt: 'Liguria'
      }
    },
    {
      title: 'Liguria',
      daysCounter: 7,
      month: 6,
      path: '/trips/liguria',
      image: {
        src: '/img/trips/thumbnails/liguria.jpg',
        alt: 'Liguria'
      }
    },
    {
      title: 'Liguria',
      daysCounter: 7,
      month: 6,
      path: '/trips/liguria',
      image: {
        src: '/img/trips/thumbnails/liguria.jpg',
        alt: 'Liguria'
      }
    }
  ]
</script>

<template>
  <AccountBanner />
  <div class="tiles">
    <Tile 
      v-for="tile in tiles"
      :key="tile.title"
      v-bind="tile"
    />
  </div>
</template>

<style lang="scss">
  .tiles {
    padding: 0 10% 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }

  .tile:nth-child(3) {
    align-self: end;
  }
</style>
