<script lang="ts" setup>
  import { Social } from '@/types';
  import { Props as FooterPersonSocialsProps } from '@/components/FooterPersonSocials.vue';

  const filipSocials: FooterPersonSocialsProps = {
    name: 'Filip',
    socials: {
      ig1: {
        icon: 'ig.png',
        url: 'https://instagram.com/fifciuu',
        alt: 'Fifciuu'
      },
      ig2: {
        icon: 'ig.png',
        url: 'https://instagram.com/dronciuu',
        alt: 'Dronciuu'
      },
      yt: {
        icon: 'yt.png',
        url: 'https://youtube.com/Fifciuu',
        alt: 'Fifciuu'
      },
      tt: {
        icon: 'tt.png',
        url: 'https://twitter.com/thefifciu',
        alt: 'Fifciuu'
      }
    }
  };

  const igaSocials: FooterPersonSocialsProps = {
    name: 'Iga',
    socials: {
      ig1: {
        icon: 'ig.png',
        url: 'https://instagram.com/bubaa_4',
        alt: 'Bubek'
      },
      ig2: {
        icon: 'ig.png',
        url: 'https://instagram.com/drukujechwile',
        alt: 'Drukuje chwile'
      }
    }
  };
</script>

<template>
  <footer class="footer">
    <div class="footer__box-wrapper">
      <span class="box-wrapper__copyright">Copyright by Another Flight 2022</span>
      <FooterPersonSocials v-bind="filipSocials" />
      <FooterPersonSocials v-bind="igaSocials" />
    </div>
  </footer>
</template>

<style lang="scss">
  .box-wrapper__copyright {
    color: #666;
  }
  .footer__box-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
  }
</style>