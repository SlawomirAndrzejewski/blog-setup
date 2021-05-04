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
import { ref } from "vue"

export default {
  name: 'Home',
  components: {
    PostsList
  },
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {

      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      }

      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    return { posts, error }
  }
}
</script>
