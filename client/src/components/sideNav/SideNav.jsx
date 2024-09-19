import "./sideNav.css";
import { Link } from "react-router-dom";


const SideNav = () => {
    return (
        <aside id="side_nav">
            <h1 class="logo">NYSCL</h1>

            <ul class="side_nav_list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/task">Task</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </aside>
    )
}

export default SideNav;