import './login.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


// Components
import Header from '../../components/header/Header';


const Login = ({ setIsLogin, susMsg, errMsg}) => {

    const[callup, setCallup] = useState("");
    const[pass, setPass] = useState("");


    const navigate = useNavigate();


    const handleCorperAuth = async (e) => {
        e.preventDefault();

        if( !callup || !pass) return errMsg("All fields required!");

        const Corps = {
            callup,
            pass
        }

        try{

            const response = await  axios.post(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/auth/login`, Corps);
            setIsLogin(true);
            navigate("/");
            susMsg(response.data.msg);
          

        }catch(e){
            errMsg(e.response.data.msg);
        }
    }


    return (
        <>

            {/* page header section */}
            <Header />



            <main id="content">

                <section id="login">

                    <div className="login_box sty_border">

                        <h1 className="form_heading">Login</h1>
                        
                        <form onSubmit={ handleCorperAuth } action="" method="post">

                            <input onChange={(e) => {setCallup(e.target.value)}} className="in_sty" type="text" name="callup" id="callup" placeholder="Callup Number"/>
                            <input onChange={(e) => {setPass(e.target.value)}} className="in_sty" type="password" name="password" id="password" placeholder="Password"/>

                            <div className="form_button_block">
                                <button type='submit' className="form_box_button"> Login </button>
                            </div>
                        </form>

                        <div className="other_links">
                            <Link className="reg_link" to="/register">Register</Link>
                            <Link className="forget_link" to="/forget">Forget password</Link>
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}


export default Login;