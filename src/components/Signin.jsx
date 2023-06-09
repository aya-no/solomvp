import { Admin } from "./Admin"
import { auth } from '../firebase';
import { useAuthContext } from '../context/AuthContext';
// import { useState } from 'react';

export const Signin = (props) => {
    const { user } = useAuthContext();
    const { setSignin, url } = props


    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        auth.signInWithEmailAndPassword(email.value, password.value);
    };

    return (
        <main>
            {(user) ? <Admin setSignin={setSignin} url={url} /> :
                <>
                    <h2>コーヒー豆管理画面</h2>
                    <form onSubmit={handleSubmit} className="loginForm" >
                        <div>
                            <label>email</label>
                            <input name="email" type="email" placeholder="email" />
                        </div>
                        <div>
                            <label>password</label>
                            <input name="password" type="password" placeholder="password" />
                        </div>
                        <div className="signinBtnDiv">
                            <button>login</button>
                        </div>
                    </form>
                    <div className="returnBtn">
                        <button onClick={() => setSignin(false)}>戻る</button>
                    </div>
                </>

            }
        </main>



    )
}