<template>
  <div>
      <div v-for="post in posts" :key="post.id">
          <PostsItem :post="post" />
      </div>
  </div>
</template>

<script>
import PostsItem from "./PostsItem"

export default {
    props: ['posts'],
    components: {
        PostsItem
    }
}
</script>

<style>

</style>