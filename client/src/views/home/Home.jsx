import './home.css';
import { useNavigate } from 'react-router-dom';

//components
import Invite from "../../components/invite/Invite";
import FootNav from '../../components/footNav/FootNav';

const Home = ({susMsg}) => {


    // navigate
    const navigate = useNavigate();

    return(
        <>
            {/* page header section */}
            <div className="hompage_header">
                <small className='homepage_greetings'>Good day Ezekiel</small>
                <div className="left-user-icon" onClick={() => { navigate("/profile") }}> EA </div>
            </div>



            <main id="content">

                <section id="account">
                    <div className="acct_info">
                        <p className="acct_info_label">Total Balance: </p>
                        <h2 className="main_bal">#10,000</h2>

                        <div className="witdep">
                            <span className="withdraw">Withdraw</span>
                            <button className="deposit">Deposit</button>
                        </div>
                    </div>
                </section>

                <section id="menus">
                    <div className="menu-action-block">

                        <div onClick={() => { navigate("/send") }} className="icon_box_block">
                            <div className="icon_box"> o </div>
                            <span className="icon_box_label">Send</span>
                        </div>

                        <div onClick={() => { navigate("/loan") }} className="icon_box_block">
                            <div className="icon_box"> o </div>
                            <span className="icon_box_label">Loan</span>
                        </div>

                        <div onClick={() => { navigate("/recieve") }} className="icon_box_block">
                            <div className="icon_box"> o </div>
                            <span className="icon_box_label">Recieve</span>
                        </div>

                    </div>
                </section>


                <section id="tasks">
                    <h3>Daily Tasks</h3>

                    <div className="task_block">
                        
                        <small>Tasks unavaliable</small>

                    </div>

                </section>

            
                {/* invite compponents */}
                <Invite />

            </main>

            {/* foot navigation components */}
            <FootNav />
        </>
    )
}


export default Home;