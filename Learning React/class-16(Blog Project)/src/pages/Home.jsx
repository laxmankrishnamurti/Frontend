import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components/index'

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(async () => {
        await service.getAllPost()
            .then((post) => {
                if (post) {
                    setPosts(post.documents)
                }
            })
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 m-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl hover:text-gray-500 font-bold'>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='py-8 w-full'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Home