import './TodoApp.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'

import AuthProvider, { useAuth } from '../security/AuthContext.js'

import LoginPage from '../pages/LoginPage.jsx'
import WelcomePage from '../pages/WelcomePage.jsx'
import TodoPage from '../pages/TodoPage.jsx'
import HeaderComponent from '../common/HeaderComponent.jsx'
import FooterComponent from '../common/FooterComponent.jsx'
import ErrorComponent from '../common/ErrorComponent.jsx'

function TodoApp () {

    // Authenticating Routes - display protected components
    function AuthenticatedRoutes ({children}) {
        
        const authContext = useAuth()
        const isAuthenticated = authContext.isAuthenticated

        // If-else condition: If user is authenticated, show the protected component
        //                    else, redirect to login
        return isAuthenticated ? children : <Navigate to="/login"/>
    }

    // Authenticate Routes - redirect to welcome page
    function LoginRoutes ({children}) {
        
        const authContext = useAuth()
        const isAuthenticated = authContext.isAuthenticated
        
        // If-else condition: If user is already authenticated, redirect to welcome page
        //                    else, show Login Page
        return isAuthenticated ? <Navigate to="/welcome/User123"/> : children
    }

    return(
        <div className="todo-app">
            <AuthProvider>
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<LoginRoutes>
                                                    <LoginPage/>
                                                  </LoginRoutes>}>
                    </Route>
                    <Route path="/login" element={<LoginRoutes>
                                                    <LoginPage/>
                                                  </LoginRoutes>}>
                    </Route>
                    <Route path="/welcome/:username" element={<AuthenticatedRoutes>
                                                                <WelcomePage/>
                                                              </AuthenticatedRoutes>}>
                    </Route>

                    <Route path="/todos" element={<AuthenticatedRoutes>
                                                    <TodoPage/>
                                                  </AuthenticatedRoutes>}>
                    </Route>
                    <Route path="*" element={<ErrorComponent/>}></Route>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

export default TodoApp;