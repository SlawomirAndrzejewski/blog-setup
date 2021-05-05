<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostsList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList"
import TagCloud from "../components/TagCloud"
import Spinner from "../components/Spinner"
import getPosts from "../composables/getPosts"

export default {
  name: 'Home',
  components: {
    PostsList,
    TagCloud,
    Spinner
  },
  setup() {
    const { posts, error, load } = getPosts()
    load()

    return { posts, error }
  }
}
</script>

<style scoped>
  .home {
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
