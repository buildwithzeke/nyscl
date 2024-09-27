import './register.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Components
import Header from '../../components/header/Header';

const Register = ({susMsg, errMsg}) => {

    const[callup, setCallup] = useState("");
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("");

    
    const navigate = useNavigate();

    const handleCorperReg = async (e) => {
        e.preventDefault();

        if( !callup || !email || !pass)return errMsg("All fields required!");

        const newCorps = {
            callup,
            email,
            pass
        }

        try{

            const response = await  axios.post(`${process.env.REACT_APP_BACKEND_API_BASE_URL}/auth/register`, newCorps);
            navigate("/login");
            susMsg(response.data.msg);
          

        }catch(e){
            errMsg(e.response.data.msg);
        }
    }

    return (
        <>

            {/* <!-- page header section --> */}
            <Header />



            <main id="content">

                <section id="Register">

                    <div className="reister_box sty_border">

                        <h1 className="form_heading">Register</h1>

                        <form onSubmit={ handleCorperReg } method="post">

                            <input onChange={(e) => {setCallup(e.target.value)}} className="in_sty" type="text" name="callup" id="callup" placeholder="Callup Number"/>
                            <input onChange={(e) => {setEmail(e.target.value)}} className="in_sty" type="email" name="email" id="email" placeholder="Email"/>
                            <input onChange={(e) => {setPass(e.target.value)}} className="in_sty" type="password" name="password" id="password" placeholder="Password"/>

                            <div className="form_button_block">
                                <button type="submit" className="form_box_button"> Register </button>
                            </div>
                        </form>

                        <Link className='regBackLoginLink' to="/login">Back to login</Link>
                    </div>

                </section>
            </main>
        </>
    )
}

export default Register;