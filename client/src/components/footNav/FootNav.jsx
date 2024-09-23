import { Link } from "react-router-dom";
import "./footNav.css";



// icons
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";




const FootNav = () => {
    return (
        <footer id="bottom_nav">
            <div class="bottom_nav_block">

                <i class="foot_icons">
                    <Link to="/"> icon </Link>
                </i>

                <i class="foot_icons">
                    <Link to="/"> <FaClipboardCheck />
                    </Link>
                </i>

                <i class="foot_icons mid_icon">
                    <Link to="/"> <FaHouseChimneyUser /> </Link>
                </i>

                <i class="foot_icons">
                    <Link to="/"> icon </Link>
                </i>

                <i class="foot_icons">
                    <Link to="/profile"> <FaUserLarge /> </Link>  
                </i>
            </div>
        </footer>
    )
}


export default FootNav;