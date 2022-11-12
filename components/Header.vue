
<script lang="ts" setup>
  interface MenuItemDraft {
    text: string;
    path: string;
  };

  const menuItemFactory = (item: MenuItemDraft) => {
    return {
      text: item.text,
      path: item.path
    }
  };

  const menuItems = [
    menuItemFactory({
      text: 'Home',
      path: '/'
    }),
    menuItemFactory({
      text: 'About us',
      path: '/about-us'
    })
  ];
</script>

<template>
  <header class="header">
    <ul class="header__menu">
      <li 
        v-for="menuItem in menuItems"
        :key="menuItem.path"
        class="menu__item"
      >
        <NuxtLink 
          class="item__link"
          :to="menuItem.path"
        >{{ menuItem.text }}</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<style lang="scss">
  .header {
    background: #141618;
    padding: 20px 10%;

    &__menu {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      list-style: none;
    }
  }

  .menu__item {

  }

  .item__link {
    color: #ddd;
    padding: 0 10px;
    font-size: 19px;
  }
</style>
