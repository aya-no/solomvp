import { useState, useEffect } from "react"
import axios from 'axios';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export const Admin = (props) => {

    const { setSignin, url } = props
    const [allbeans, setAllbeans] = useState([]);
    const [inputBeansText, setInputBeansText] = useState({})
    const [changeOK, setChangeOK] = useState(false)

    const getAllBeans = async () => {
        await axios.get(url + "/allbeans").then(res => setAllbeans(res.data));
    };

    const inputBeans = (e) => {
        console.log("changeBeans_e:", e)
        setInputBeansText({
            id: Number(e.target.className),
            [e.target.id]: e.target.value
        });
        setChangeOK(!changeOK)
    }

    useEffect(() => {
        axios.put(url + "/updatebeans", inputBeansText);
    }, [changeOK])

    useEffect(() => {
        getAllBeans();
    }, [])

    useEffect(() => {
        console.log("allbeans:", allbeans)
    }, [allbeans])

    useEffect(() => {
        console.log("inputBeansText:", inputBeansText)
    }, [inputBeansText])


    return (
        <>
            <h2>管理者画面</h2>

            <table className="allbeansList">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>コーヒー豆名</th>
                        <th>苦味</th>
                        <th>酸味</th>
                        <th>甘味</th>
                        <th>コク</th>
                        <th>香り</th>
                        <th>説明</th>
                        <th>価格</th>
                        <th>画像</th>
                        <th>URL</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {allbeans.map((beans, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    {beans.id}
                                </td>
                                <td>
                                    <input type="text" id="name" className={beans.id} onBlur={inputBeans} defaultValue={beans.name}></input>
                                </td>
                                <td>
                                    <input type="number" id="bitterness" className={beans.id} onBlur={inputBeans} defaultValue={beans.bitterness} min={1} max={5}></input>
                                </td>
                                <td>
                                    <input type="number" id="acidity" className={beans.id} onBlur={inputBeans} defaultValue={beans.acidity} min={1} max={5}></input>
                                </td>
                                <td>
                                    <input type="number" id="sweets" className={beans.id} onBlur={inputBeans} defaultValue={beans.sweets} min={1} max={5}></input>
                                </td>
                                <td>
                                    <input type="number" id="richbody" className={beans.id} onBlur={inputBeans} defaultValue={beans.richbody} min={1} max={5}></input>
                                </td>
                                <td>
                                    <input type="number" id="flavor" className={beans.id} onBlur={inputBeans} defaultValue={beans.flavor} min={1} max={5}></input>
                                </td>
                                <td>
                                    <input type="text" id="about" className={beans.id} onBlur={inputBeans} defaultValue={beans.about}></input>
                                </td>
                                <td>
                                    <input type="text" id="yen" className={beans.id} onBlur={inputBeans} defaultValue={beans.yen}></input>
                                </td>
                                <td>
                                    <input type="text" id="img" className={beans.id} onBlur={inputBeans} defaultValue={beans.img}></input>
                                </td>
                                <td>
                                    <input type="text" id="url" className={beans.id} onBlur={inputBeans} defaultValue={beans.url}></input>
                                </td>
                                <tb>
                                    <button><AiFillDelete /></button>
                                </tb>
                            </tr>
                        )
                    })}
                </tbody>
            </table>



            <button className="recommendBtn" onClick={() => setSignin(false)}>戻る</button>

        </>
    )
}