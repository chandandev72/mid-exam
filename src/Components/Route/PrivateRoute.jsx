import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import { Navigate, useLocation } from "react-router-dom"
import Loading from "../Loading/Loading"
import toast from "react-hot-toast"

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(user && user.uid){
        return children
    }
    toast.error("Please Log In After redirect Previews page.")
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
}

export default PrivateRoute