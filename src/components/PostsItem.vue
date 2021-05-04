<template>
  <div>
      <article>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </article>
  </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style scoped>
    article {
        margin: 20px auto;
        padding: 10px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        max-width: 450px;
    }
</style>