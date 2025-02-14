<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <menu-link classItem="footer__item" :link="links.home.link">
              <img
                :src="require(`@/assets/logo/${links.home.icon}`)"
                :alt="links.home.icon"
              />
            </menu-link>

            <menu-link
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
import MenuLink from "@/components/MenuLink.vue";

export default {
  components: { MenuLink },
  data() {
    return {
      links: {
        home: {
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
            link: "/for-your-pleasure",
          },
          {
            id: 3,
            text: "Contact us",
            link: "/contact-us",
          },
        ],
      },
    };
  },
};
</script>