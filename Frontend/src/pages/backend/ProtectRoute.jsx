
import { Navigate } from "react-router-dom";

let ProtectRoute=({children})=>{

    let token = sessionStorage.getItem('token')
    if(!token){
        return <Navigate to='/login'/>
    }
    return children
}
export default ProtectRoute 