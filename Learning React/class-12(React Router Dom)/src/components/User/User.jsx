import { useParams } from "react-router-dom"

function User() {

    const { name } = useParams()

    return (
        <div>
            <p className="text-center text-white font-bold text-xl p-4  bg-slate-500">Login User is : {name} </p>
        </div>
    )
}

export default User