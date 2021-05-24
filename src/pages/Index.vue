<template>
  <Layout no-main-padding>
    <hero />
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <Container>
      <div
        class="sm:transform -translate-y-6 rounded-md bg-white py-6 p-4 sm:p-8"
      >
        <h1 class="text-2xl font-medium mb-6 text-gray-800">
          So'ngi maqolalar
        </h1>
        <ul>
          <li v-for="{ node } in $page.posts.edges" class="mb-8" :key="node.id">
            <h2 class="text-2xl mb-2 font-semibold">
              <g-link class="text-gray-800" :to="node.path">{{
                node.title
              }}</g-link>
            </h2>
            <div class="mb-2">
              <span class="text-gray-500">{{
                $dayjs(node.date).format("DD-MMMM YYYY")
              }}</span>
              <span> &middot; </span>
              <!-- <span>{{ node.timeToRead }} min read</span> -->
            </div>
            <div>
              {{ node.excerpt }}
            </div>
            <div class="text-indigo-600 text-lg sm:text-md sm:font-semibold">
              <g-link :to="node.path">Batafsil -></g-link>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allContentfulBlog {
		pageInfo{
      totalPages
      currentPage
      hasNextPage
      hasPreviousPage
    }
    edges {
      
      node {
        id
        title
        date
        path
      }
    }
  }
}
</page-query>

<script>
// import * as dayjs from "dayjs";

import Hero from "../components/Hero.vue";
export default {
  components: { Hero },
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {},
  methods: {},
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
