<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-link :link="links.header.link" classItem="footer__item">
              <img
                :src="require(`@/assets/logo/${links.header.icon}`)"
                :alt="links.header.icon"
              />
            </nav-link>

            <nav-link
              v-for="link in links.other"
              :key="link.id"
              classItem="footer__item"
              :link="link.link"
              :text="link.text"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
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
          icon: "Logo_black.svg",
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