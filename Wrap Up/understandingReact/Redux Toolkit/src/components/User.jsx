import { removeUser } from "../features/testing"
import { useDispatch } from "react-redux"

function User({ user }) {

    const dispatch = useDispatch()

    const remove = () => {
        dispatch(removeUser({ id: user.id }))
    }

    return (
        <>
            <div>
                <p>User Id is : {user.id}</p>
                <p>Username is : {user.username}</p>
                <button
                    className="bg-red-600 px-3 py-2 rounded-md text-white"
                    onClick={remove}
                >Remove User</button>
            </div >
        </>
    )
}

export default User