import "./header2.css";
import { FaAngleLeft } from "react-icons/fa6";

const Header2 = ({title}) => {

    const goBack = () => {
        alert("go back!");
    }

    return (
        <header id="header2">

            <div className="header2_block">
                <FaAngleLeft onClick={ goBack }/>
                <p className="header_title"> {title} </p>
            </div>
        </header>
    )
}

export default Header2;