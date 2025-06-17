import { createContext, useContext, useState } from "react";

// Create a context
export const authContext = createContext()

// Add simple hook
export const useAuth = () => useContext(authContext)

// AuthProvider —> children
function AuthProvider ( {children} ) {

    // Initialize LocalStorage for authentication state
    const [isAuthenticated, setAuthenticatedState] = useState(() => {

        const storeAuth = localStorage.getItem('isAuthenticated')
        return storeAuth === 'true'
    })
 
    // Update both Authentication State and localStorage
    const setAuthenticated = (value) => {
        
        setAuthenticatedState(value)

        if (value) {
            localStorage.setItem('isAuthenticated','true')
        }
        else {
            localStorage.removeItem('isAuthenticated')
        }
    } 

    // Login Authentication
    function login (username, password) {

        if (username==='User123' && password==='password') {
            setAuthenticated(true)
            return true
        }
        else {
            setAuthenticated(false)
            return false
        }
    }   

    function logout () {
        setAuthenticated(false)
    }

    return (
        <authContext.Provider value = { {isAuthenticated, setAuthenticated, login, logout} }>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;