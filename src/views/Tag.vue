<template>
  <div class="tag">
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length" class="layout">
        <PostsList :posts="postsWithTag" />
        <TagCloud :posts="posts" />
      </div>
      <div v-else>
        <Spinner />
      </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner"
import PostsList from "../components/PostsList"
import TagCloud from "../components/TagCloud"
import getPosts from "../composables/getPosts"
import { useRoute } from "vue-router"
import { computed } from "vue"

export default {
    name: "Tag",
    components: {
      PostsList,
      TagCloud,
      Spinner
    },
    setup() {
      const route = useRoute()
      const { posts, error, load } = getPosts()

      load()

      const postsWithTag = computed(() => {
        return posts.value.filter(post => post.tags.includes(route.params.tag))
      })

      return { error, posts, postsWithTag }
    }
}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }

.layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>