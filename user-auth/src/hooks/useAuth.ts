import { AuthContext } from "src/providers";
import { useContext } from "react";

export default function useAuth () {

    const { user, isAuth, updateUser, logIn, logOut } = useContext(AuthContext)

    return {
        user,
        isAuth,
        updateUser,
        logIn, 
        logOut
    }
}
