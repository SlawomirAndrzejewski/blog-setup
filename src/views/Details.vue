<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">Delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner";
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '../firebase/config';

export default {
  props: ["id"],
  components: {
    Spinner,
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()

    const { post, error, load } = getPost(route.params.id);
    load();

    const handleClick = async () => {
      await projectFirestore.collection('posts').doc(props.id).delete()
      router.push({ name: 'Home' })
    };

    return { post, error, handleClick };
  },
};
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
</style>