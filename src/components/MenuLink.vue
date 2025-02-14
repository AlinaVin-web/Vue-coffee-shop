<template>
  <li :class="classItem">
    <RouterLink :to="link">{{ text }}</RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>
