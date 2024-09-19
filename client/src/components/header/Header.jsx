import "./header.css";

const Header = () => {
    return (
        <header id="header">

            <div className="header_block">

                <div className="header_image"></div>
                <p className="header_welcome_msg">Welcome you to <span className="header_name">NYSCL</span></p>
            </div>
        </header>
    )
}

export default Header;