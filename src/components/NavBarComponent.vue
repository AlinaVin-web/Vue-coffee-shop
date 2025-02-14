<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li class="header__item">
        <RouterLink :to="links[0].link">
          <img
            :src="require(`@/assets/logo/${links[0].icon}`)"
            :alt="links[0].icon"
          />
        </RouterLink>
      </li>
      <menu-link
        classItem="header__item"
        :link="links[1].link"
        :text="links[1].text"
      />
      <menu-link
        classItem="header__item"
        :link="links[2].link"
        :text="links[2].text"
      />
      <menu-link
        classItem="header__item"
        :link="links[3].link"
        :text="links[3].text"
      />
    </ul>
  </header>
</template>

<script>
import MenuLink from "@/components/MenuLink.vue";

export default {
  components: { MenuLink },
  data() {
    return {
      links: [
        {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        {
          id: 1,
          text: "Our coffee",
          link: "/our-coffee",
        },
        {
          id: 2,
          text: "For your pleasure",
          link: "/for-your-pleasure",
        },
        {
          id: 3,
          text: "Contact us",
          link: "/contact-us",
        },
      ],
    };
  },
};
</script>
