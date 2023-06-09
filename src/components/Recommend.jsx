// import App from "../App"
import { Fragment } from "react"

export const Recommend = (props) => {

    const { setRecommendation, recommendBeans } = props

    return (
        <>
            <h2>おすすめコーヒー豆</h2>

            <table className="ranking">
                <tbody>

                    {recommendBeans.map((beans, i) => {
                        return (
                            <Fragment key={beans.id}>
                                <tr>
                                    <td className="rankA">
                                        <img className="rankimg" src={`${process.env.PUBLIC_URL}/img/No${i + 1}.png`} alt="No1"></img>
                                    </td>
                                    <td className="rankB">
                                        <a className="url" rel="noreferrer" target="_blank" href={beans.url}>
                                            + 詳細をみる（外部サイトへ）
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img className="beansimg" src={`${process.env.PUBLIC_URL}/img/${beans.img}`} alt="beansphoto"></img>
                                    </td>
                                    <td>
                                        <p className="aboutBeans">{beans.name}</p>
                                        <p className="aboutBeans">{beans.about}</p>
                                        <p className="aboutBeans">{beans.yen}</p>
                                    </td>
                                </tr>
                            </Fragment>
                        )
                    })}
                </tbody>
            </table>

            <div className="returnBtn">

                <button onClick={() => setRecommendation(false)}>戻る</button>
            </div>
        </>
    )
}