import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const signInUsingGoole = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)

            .finally(() => setIsLoading(false))


            .catch((error) => {
                setError(error.code)
                setError(error.message)
            });
    }

    const logOutGoogle = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {

            });

    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unsubscribe;
    }, [])

    return {
        signInUsingGoole,
        logOutGoogle,
        user,
        isLoading,
        error
    }


}

export default useFirebase;