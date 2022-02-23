<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <nav-link :link="links.header.link" classItem="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </nav-link>

      <nav-link
        v-for="link in links.other"
        :key="link.id"
        classItem="header__item"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
</template>

<script>
import NavLink from "@/components/NavLink.vue";

export default {
  data() {
    return {
      links: {
        header: {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: 1,
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: 2,
            text: "For your pleasure",
            link: "/your-pleasure",
          },
          {
            id: 3,
            text: "Contact Us",
            link: "/contact",
          },
        ],
      },
    };
  },
  components: { NavLink },
};
</script>

<style lang="scss" scoped>
</style>