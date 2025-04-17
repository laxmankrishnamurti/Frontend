import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    console.log("Fetched data is : ", data)
    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch('https://api.github.com/users/laxmankrishnamurti')
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    // }, [])

    return (
        <>
            <div className='flex flex-col justify-center items-center mt-4'>
                <p>Username is : <span className='text-red-600 font-bold'>{data.login}</span></p>
                <div className='mt-4'>
                    <img className='w-64' src={data.avatar_url} />
                </div>
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/laxmankrishnamurti')
    return response.json()
}