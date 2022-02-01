// react
import { useState, createContext, FC, useEffect } from 'react';
// types
import { TokenContextState } from 'src/types/types';
// router
import { useNavigate } from 'react-router-dom';

// ------------------------------------------------------------------------------------

const contextDefaultValues: TokenContextState = {
    user: {
        about: "",
        address: "",
        city: "",
        country: "",
        displayName: "",
        email: "",
        id: "",
    },
    isAuth: false,
    updateUser: () => { },
    logIn: () => { },
    logOut: () => { }
};

// ------------------------------------------------------------------------------------

export const AuthContext = createContext<TokenContextState>(
    contextDefaultValues
);

const AuthProvider: FC = ({ children }) => {


    // global states
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState(contextDefaultValues.user)
    console.log(isAuth);

    // helper methods
    const updateUser = (newUser: {}) => { setUser(newUser) };
    const navigate = useNavigate();


    // initialRender: validUserToken ? authorize : don't authorize
    useEffect(() => {
        const init = async () => {
            const userToken = localStorage.getItem('token')
            userToken ? setIsAuth(true) : setIsAuth(false)
        }

        init();
    }, [])



    // upon receiving a token, update global state and send user data request
    const logIn = (newToken: string, userId: string) => {
        setIsAuth(true);
        localStorage.setItem('token', newToken)
        localStorage.setItem('id', userId)
        // fetchUserData(newToken)
    };

    // logOut 
    const logOut = () => {
        setIsAuth(false);
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ user, isAuth, logIn, logOut, updateUser }}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;

