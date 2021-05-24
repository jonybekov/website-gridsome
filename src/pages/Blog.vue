<template>
  <Layout>
    <Container>
      <h2 class="text-4xl font-bold mb-8">Raqamli bog'</h2>
      <section v-if="$page">
        <ul>
          <li v-for="{ node } in $page.posts.edges" class="mb-8" :key="node.id">
            <h2 class="text-xl mb-2 font-semibold">
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
            <div class="text-indigo-600 font-semibold">
              <g-link :to="node.path">Batafsil -></g-link>
            </div>
          </li>
        </ul>
        <pager
          v-if="$page.posts.pageInfo.totalPages > 1"
          :info="$page.posts.pageInfo"
        />
      </section>
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
import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: "Blog",
  },
  components: {
    Pager,
  },
};
</script>
