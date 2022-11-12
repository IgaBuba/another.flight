<script lang="ts" setup>
import { Social } from '@/types';

export interface Props {
  name: string;
  socials: Record<string, Social>;
};

const { name, socials } = defineProps<Props>();
</script>

<template>
  <div class="footer-person-socials">
    <span class="person">{{ name }}</span>
    <div class="icons">
      <div 
        class="icon"
        :key="social.icon"
        v-for="(social, key) in socials"
      >
        <a class="icon__url" :href="social.url" target="_blank">
          <img class="icon__icon" :src="`/img/socials/${social.icon}`" :alt="social.alt" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer-person-socials {
    text-align: center;
  }

  .icons {
    display: flex;
    margin-top: 8px;
  }

  .icon {
    margin: 0 4px;
    opacity: 0.6;
    transition: opacity .7s;

    &__icon {
      width: 35px;
    }

    &:hover {
      opacity: 1;
    }
  }

  .person {
    font-size: 24px;
    text-transform: capitalize;
    color: #666;
    transition: color .3s;
  }

  .footer-person-socials:hover {
    .person {
      color: #fff;
    }
  }
</style>
