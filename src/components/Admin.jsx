
export const Admin = (props) => {

    const { setSignin } = props

    return (
        <>
            <h2>管理者画面</h2>

            <button className="recommendBtn" onClick={() => setSignin(false)}>戻る</button>

        </>
    )
}