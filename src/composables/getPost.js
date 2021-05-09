import { ref } from "vue"
import { projectFirestore } from "../firebase/config"

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('posts').doc(id).get()
            post.value = { ...res.data(), id: res.id }

            if(!res.exists) {
                throw Error('That post does not exist!')
            }

            //simulate delay
            // await new Promise(resolve => {
            //     setTimeout(resolve, 1000)
            // })

            // let data = await fetch('http://localhost:3000/posts/' + id)
            // if (!data.ok) {
            //     throw Error('That post does not exist')
            // }
            // post.value = await data.json()
        }

        catch(err) {
            error.value = err.message
        }
    }

    return { post, error, load } 
}

export default getPost