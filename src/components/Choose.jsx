import { Recommend } from "./Recommend"
import { useState } from 'react';


export const Choose = (props) => {

    const { selectFav, setSelectFav, recommendBeans } = props

    const [recommendation, setRecommendation] = useState(false);

    const changeSelect = (event) => {
        setSelectFav({ ...selectFav, [event.target.id]: Number(event.target.value) })
    }

    return (
        <>
            {recommendation ? <Recommend setRecommendation={setRecommendation} recommendBeans={recommendBeans} /> :
                <>
                    <h2>あなたのお好みは？</h2>

                    <div className="range">
                        <label>苦味</label>
                        <input type="range" id="bitterness" value={selectFav.bitterness} onChange={changeSelect} min="1" max="5" step="0.2"></input>
                    </div>
                    <div className="range">
                        <label>酸味</label>
                        <input type="range" id="acidity" value={selectFav.acidity} onChange={changeSelect} min="1" max="5" step="0.2"></input>

                    </div>
                    <div className="range">
                        <label>甘味</label>
                        <input type="range" id="sweets" value={selectFav.sweets} onChange={changeSelect} min="1" max="5" step="0.2"></input>
                    </div>
                    <div className="range">
                        <label>コク</label>
                        <input type="range" id="richbody" value={selectFav.richbody} onChange={changeSelect} min="1" max="5" step="0.2"></input>
                    </div>
                    <div className="range">
                        <label>香り</label>
                        <input type="range" id="flavor" value={selectFav.flavor} onChange={changeSelect} min="1" max="5" step="0.2"></input>
                    </div>

                    <button className="recommendBtn" onClick={() => setRecommendation(true)}>おすすめコーヒー豆を調べる</button>
                </>
            }
        </>
    )
}