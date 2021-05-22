<template>
  <Layout>
    <Container class="pt-8">
      <article>
        <header class="mb-8">
          <h1 class="text-6xl mb-6 font-medium">
            {{ $page.post.title }}
          </h1>
          <span class="text-gray-500 ">{{
            $dayjs($page.post.date).format("DD-MMMM YYYY")
          }}</span>
        </header>
        <div class="featured-image">
          <PictureContainer
            class="w-full"
            :picture="$page.post.featuredImage"
          />
          <!-- <g-image
          width="500"
          height="500"
          fit="contain"
          :src="$page.post.featuredImage.file.url"
        /> -->
          <div
            class="content text-lg text-gray-800 leading-8"
            v-html="content"
          />
        </div>
      </article>
    </Container>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: contentfulBlog(path: $path) {
    title
    featuredImage {
      title
      file {
        url
      }
    }
    content
  }
}

</page-query>

<script>
import MarkdownIt from "markdown-it";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import PictureContainer from "../components/PictureContainer.vue";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export default {
  components: { PictureContainer },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },

  data() {
    return {
      options: {
        renderMark: {
          [MARKS.CODE]: (text) => `<div class="custom-code">${text}</div>`,
        },
      },
    };
  },

  computed: {
    content() {
      return documentToHtmlString(this.$page.post.content, this.options);
    },
  },
};
</script>

<style scoped>
.featured-image {
  width: 100%;
  height: 100%;
}

.featured-image .g-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<style>
.content p {
  margin-bottom: 1.55rem;
}
</style>
