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
        <>
            {(user) ? <Admin setSignin={setSignin} url={url} /> :
                <div>
                    <h2>ログイン</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>メールアドレス</label>
                            <input name="email" type="email" placeholder="email" />
                        </div>
                        <div>
                            <label>パスワード</label>
                            <input name="password" type="password" placeholder="password" />
                        </div>
                        <div>
                            <button>ログイン</button>
                        </div>
                    </form>
                    <button className="recommendBtn" onClick={() => setSignin(false)}>戻る</button>
                </div>

            }

        </>



    )
}