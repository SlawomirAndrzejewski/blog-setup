import { ref } from "vue"
import { projectFirestore } from "../firebase/config"

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {

        try {
            //simulate delay
            // await new Promise(resolve => {
            //     setTimeout(resolve, 1000)
            // })

            const res = await projectFirestore.collection('posts').get()
            posts.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })

            // console.log(posts.value)

            // let data = await fetch('http://localhost:3000/posts')
            // if (!data.ok) {
            //     throw Error('no data available')
            // }
            // posts.value = await data.json()
        }

        catch (err) {
            error.value = err.message
        }
    }

    return { posts, error, load }
}

export default getPosts