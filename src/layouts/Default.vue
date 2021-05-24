<template>
  <div>
    <header class=" bg-indigo-600 xl:px-100 py-10">
      <div class="container mx-auto flex justify-between">
        <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
        <g-link class="text-lg text-white font-normal" to="/">
          Azizbek Jonibekov
        </g-link>

        <nav class="nav">
          <g-link
            v-for="{ text, to } in navItems"
            :key="to"
            class="rounded-sm transition-all py-2 px-3 mr-2 hover:bg-indigo-700 text-white"
            active-class="bg-indigo-800 hover:bg-indigo-800"
            :to="to"
            >{{ text }}</g-link
          >
        </nav>
      </div>
    </header>
    <main class="bg-gray-100 py-6" :class="{ 'pt-0': noMainPadding }">
      <slot />
    </main>
    <Footer />

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
  @apply text-lg text-gray-800 leading-8;
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
