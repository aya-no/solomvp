// import App from "../App"

export const Recommend = (props) => {

    const { setRecommendation, recommendBeans } = props

    return (
        <>
            <h2>おすすめのお豆はこちら</h2>

            <table className="ranking">
                {recommendBeans.map((beans, i) => {
                    return (
                        <>
                            <tr key={i}>
                                <td>
                                    <img src={`${process.env.PUBLIC_URL}/img/No${i + 1}.png`} alt="No1"></img>
                                </td>
                                <td class="url">
                                    <a className="url" rel="noreferrer" target="_blank" href={beans.url}>
                                        + 詳細をみる（外部サイトへ）
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img className="img" src={`${process.env.PUBLIC_URL}/img/${beans.img}`} alt="beansphoto"></img>
                                </td>
                                <td>
                                    <p className="name">{beans.name}</p>
                                    <p className="about">{beans.about}</p>
                                    <p className="yen">{beans.yen}</p>
                                </td>
                            </tr>
                        </>
                    )
                })}
            </table>


            <button className="recommendBtn" onClick={() => setRecommendation(false)}>one more</button>
        </>
    )
}