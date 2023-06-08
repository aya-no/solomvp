import { Admin } from "./Admin"
// import { useState } from 'react';

export const Signin = (props) => {
    const { setSignin, url } = props


    return (
        <>

            <Admin setSignin={setSignin} url={url} />

        </>
    )
}