import { Link } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

import './HeaderComponent.css'

function HeaderComponent () {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout () {
        authContext.logout()
    }
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <label className="navbar-brand ms-2 fs-3 fw-bold text-black">User123</label>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {isAuthenticated && <Link className="nav-link" to="/welcome/User123">Home</Link>}
                                </li>
                                <li className="nav-item">
                                    {isAuthenticated && <Link className="nav-link" to="/todos">Todo Tasks</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item">
                                {isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;