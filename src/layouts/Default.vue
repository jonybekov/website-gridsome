<template>
  <div>
    <header class="px-4 sm:px-0 bg-indigo-600 xl:px-100 py-5 sm:py-10">
      <div class="container mx-auto sm:flex justify-between">
        <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
        <g-link class="text-lg text-white font-normal" to="/">
          Azizbek Jonibekov
        </g-link>

        <nav class="nav mt-4 sm:mt-0">
          <g-link
            v-for="{ text, to } in navItems"
            :key="to"
            class="rounded-sm transition-all whitespace-nowrap py-2 px-3 mr-2 hover:bg-indigo-700 text-white"
            active-class="bg-indigo-800 hover:bg-indigo-800"
            :to="to"
            >{{ text }}</g-link
          >
        </nav>
      </div>
    </header>
    <main
      class="bg-gray-100 py-12"
      :class="{
        'pt-0': noMainPadding,
        'px-4 md:px-0': !noMainPadding,
      }"
    >
      <slot />
    </main>
    <Footer class="px-4 md:px-0" />

    <!-- </main> -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from "../components/Footer.vue";
export default {
  props: {
    noMainPadding: Boolean,
  },
  components: { Footer },
  data() {
    return {
      navItems: [
        {
          to: "/blog/",
          text: "Blog",
        },
        {
          to: "/about/",
          text: "Men haqimda",
        },
        {
          to: "/uses/",
          text: "Ish qurollarim",
        },
      ],
    };
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: "Inter", "Helvetica";
  margin: 0;
  padding: 0;
  line-height: 1.5;
  caret-color: black;
}

p {
  @apply text-md sm:text-lg text-gray-800 leading-8;
}

a {
  @apply text-indigo-600;
}

a:hover {
  /* @apply text-indigo-700; */
}

input {
  color: black;
}
</style>
