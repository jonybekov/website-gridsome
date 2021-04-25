<template>
  <Layout>
    <div>
      <h1>
        {{ $page.post.title }}
      </h1>
      <div class="featured-image">
        <g-image
          width="500"
          height="500"
          fit="contain"
          :src="$page.post.featuredImage.file.url"
        />
        <div v-html="content" />
      </div>
    </div>
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

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
  computed: {
    content() {
      // const md = new MarkdownIt();

      // return md.render(this.$page.post.content);
      return documentToHtmlString(this.$page.post.content);
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
