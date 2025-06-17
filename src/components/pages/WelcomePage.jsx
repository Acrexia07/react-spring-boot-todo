import './WelcomePage.css'
import { useParams, Link } from 'react-router-dom';

function WelcomePage () {

    const params = useParams()

    return(
        <div className="welcome-page">
            <h1>Welcome, {params.username}!</h1>
            <label>Manage your Todo Task — <Link to="/todos">Go Here</Link></label>
        </div>
    )
}

export default WelcomePage;