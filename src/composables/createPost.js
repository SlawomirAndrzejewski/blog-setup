import { ref } from "vue"

const createPost = () => {
    const post = ref({})
    const error = ref(null)

    const load = async () => {
        try {
            const data = await fetch('http://localhost:3000/posts/',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                })

            if (!data.ok) {
                throw Error('You cannot create this post')
            }
            post.value = await data.json()
        }

        catch (err) {
            error.value = err.message
        }
    }

    return { post, error, load }
}

export default getPost