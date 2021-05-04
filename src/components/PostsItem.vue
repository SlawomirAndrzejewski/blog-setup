<template>
  <div>
      <article>
        <router-link :to="{ name: 'Details', params: { id: post.id } }">
            <h2>{{ post.title }}</h2>
        </router-link>
        <p>{{ snippet }}</p>
        <div>
            <span v-for="tag in post.tags" :key="tag"># {{ tag }}</span>
        </div>
      </article>
  </div>
</template>

<script>
import { computed } from "vue"

export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + ' ...'
        })

        return { snippet }
    }

}
</script>

<style scoped>
    article {
        margin: 20px auto;
        padding: 10px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        max-width: 450px;
    }

    span {
        padding-right: 5px;
    }
</style>