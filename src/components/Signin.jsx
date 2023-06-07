import { Admin } from "./Admin"
import { useState } from 'react';

export const Signin = (props) => {
    const { setSignin } = props



    return (
        <>

            <Admin setSignin={setSignin} />

        </>
    )
}