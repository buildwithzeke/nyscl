import './forget.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Components
import Header from '../../components/header/Header';


const Forget = () => {

    const[email, setEmail] = useState("");
    const[errmsg, setErrmsg] = useState("");


    const handleForgetPass = (e) => {
        e.preventDefault();

        if(!email)return setErrmsg("Enter your email address!");

        const corperEmail = {
            email
        }

        alert(`corper: {${corperEmail.email}}`);
    }

    return (
        <>
            {/* heading */}
            <Header />

            <main id="content">

                <section id="Register">

                    <div className="reister_box sty_border">

                        <h1 className='form_heading'>Forget password</h1>

                        <form onSubmit={handleForgetPass} action="" method="post">

                            <small className='form_msg'>{errmsg}</small>

                            <input onChange={(e) => {setEmail(e.target.value)}} className="in_sty" type="email" name="email" id="email" placeholder="Enter email"/>

                            <div className="form_button_block">
                                <button type='submit' className="form_box_button"> Search </button>
                            </div>
                        </form>

                        <Link className='forgetBackLogin' to="/login">Back to login</Link>
                    </div>

                </section>
            </main>
        </>
    )
}

export default Forget;