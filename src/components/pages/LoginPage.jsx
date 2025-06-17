import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

import './LoginPage.css'

function LoginPage () {

    const [username, setUsername] = useState('User123')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()
    const authContext = useAuth()

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    // Username
    function handlesUsernameEvent (event) {
        setUsername(event.target.value)
    }

    // Password
    function handlesPasswordEvent (event) {
        setPassword(event.target.value)
    }

    // Login Button
    function handlesSubmit () {
        if (authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        }
        else {
            setShowErrorMessage(true)
        }
    }

    return(
        <div className="container" id="login-page">
            <div className="login-form">
                <h1>User Login</h1>
                {showErrorMessage && <div className="errorMessage">Incorrect Username or Password! Please try again.</div>}
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handlesUsernameEvent}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlesPasswordEvent}/>
                </div>
                <div>
                    <button type="submit" name="login" onClick={handlesSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;