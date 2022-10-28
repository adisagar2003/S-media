import { Navigate } from "react-router-dom";
const ProtectedLogin = ( { isLoggedIn, children}: {isLoggedIn:boolean, children:any}) => {
    if (!isLoggedIn) {
       return <Navigate to="/home" replace />;
    }
    return children;
} ;

export default ProtectedLogin;
