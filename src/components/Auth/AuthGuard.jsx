const { useAuth } = require("@/context/AuthContext");
const { useRouter } = require("next/router");

export const AuthGuard = ({children}) => {
    const router = useRouter()
    const {currentUser} = useAuth();

    if(!currentUser)
        router.push('/auth/sign-in')


    return children
}