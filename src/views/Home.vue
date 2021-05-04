<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostsList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList"
import getPosts from "../composables/getPosts"

export default {
  name: 'Home',
  components: {
    PostsList
  },
  setup() {
    const { posts, error, load } = getPosts()
    load()

    return { posts, error }
  }
}
</script>
