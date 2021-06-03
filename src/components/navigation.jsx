import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub as Github} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'

export default function Navigation(){
    return(
        <div className="navigation">
            <h1 id="brand">Theme JSX</h1>
            <ul className="links">
                <li className="link"><Link to="/" className="ReactLink">Home</Link></li>
                <li className="link"><Link to="/about" className="ReactLink">About</Link></li>
                <li className="link">
                    <a href="https://github.com/AnshC/theme-jsx" className="ReactLink" id="special">
                        <FontAwesomeIcon icon={Github} /> Github
                    </a>
                </li>
            </ul>
        </div>
    )
}