import { useUserContext } from '../context/userContext'

function RenderUser() {
    const getContext = useUserContext()


    return (
        <div>
            <h1 className='bg-green-400 text-center p-2 '>User Account</h1>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {getContext.users.length > 0 && getContext.users.map((user) => (
                        <tr key={user._id}>
                            <td className='border-2 border-black text-center px-4 py-1'>{user._id}</td>
                            <td className='border-2 border-black text-center px-4 py-1'>{user.name}</td>
                            <td className='border-2 border-black text-center px-4 py-1'>{user.age}</td>
                            <td className='border-2 border-black text-center px-4 py-1'>{user.email}</td>
                            <td className='border-2 border-black text-center px-4 py-1'>
                                <button className='px-6 py-1 bg-green-300 '>Update</button>
                            </td>
                            <td className='border-2 border-black text-center px-4 py-1'>
                                <button
                                    onClick={(e) => getContext.removeUser(user.email)}
                                    className='px-6 py-1 bg-red-300'
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default RenderUser