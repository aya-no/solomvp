const knex = require("./knex.js");
const express = require("express");
const app = express();

const PORT = 8080;

app.use("/", express.static("../public"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.header("Access-Control-Allow-Origin", "https://solomvp.onrender.com");
    res.header("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
});

app.use(express.json());


// コーヒー豆を全て返す
app.get("/allbeans", async (req, res) => {
    const beans = await knex("beans").select("*").orderBy("id", "asc");
    res.send(beans)
});

// 選択した好みに近いコーヒー豆を３つ返す
// 想定req
// {
//     "bitterness": 2, 
//     "acidity": 2,
//     "sweets": 2, 
//     "richbody": 2, 
//     "flavor": 2
// }
app.get("/recommendbeans", async (req, res) => {
    const { bitterness, acidity, sweets, richbody, flavor } = req.body;
    const beansdb = await knex("beans").select("*");
    // console.log(beansdb)
    await beansdb.map(async (beans) => {
        let score = 0;
        if (Math.abs(bitterness - beans.bitterness) <= 1) score++;
        if (Math.abs(acidity - beans.acidity) <= 1) score++;
        if (Math.abs(sweets - beans.sweets) <= 1) score++;
        if (Math.abs(richbody - beans.richbody) <= 1) score++;
        if (Math.abs(flavor - beans.flavor) <= 1) score++;
        await knex("beans").where({ id: beans.id }).update({ score: score })
    })
    await knex("beans").select("*").orderBy("score", "desc").then(data => res.send(data.slice(0, 3)))
})

// コーヒー豆を修正する
// 想定req
//     {
//       "id": 14,
//       "name": "ブラジル・ショコラ",
//       "bitterness": 3,
//       "acidity": 2,
//       "sweets": 4,
//       "richbody": 4,
//       "flavor": 4,
//       "about": "ビターチョコのような重厚感のある甘味を楽しめます。酸味の苦手な方へ特にオススメです!",
//       "yen": "税込 1,620円/200g",
//       "url": "http://umapanera.com/?pid=133804987"
//   }
app.put("/updatebeans", async (req, res) => {
    try {
        let keyname = Object.keys(req.body)[1]
        console.log(keyname)
        const updateData = {
            [keyname]: req.body[keyname]
        };
        console.log(updateData)
        await knex("beans")
            .where({ id: req.body.id })
            .update(updateData);
        res.send("コーヒー豆修正完了");
    } catch (err) {
        // console.error(err);
        // res.status(500).send(err.message);
    }
});



// コーヒー豆を追加する
//     {
//       "name": "ブラジル・ショコラ",
//       "bitterness": 3,
//       "acidity": 2,
//       "sweets": 4,
//       "richbody": 4,
//       "flavor": 4,
//       "about": "ビターチョコのような重厚感のある甘味を楽しめます。酸味の苦手な方へ特にオススメです!",
//       "yen": "税込 1,620円/200g",
//       "url": "http://umapanera.com/?pid=133804987"
//   }
app.post("/addbeans", async (req, res) => {
    const data = req.body;
    try {
        let id;
        await knex("beans")
            .max("id")
            .then((maxid) => {
                maxid === null ? (id = 0) : (id = maxid[0].max);
            });
        await knex("beans").insert({
            id: id + 1,
            name: data.name,
            bitterness: data.bitterness,
            acidity: data.acidity,
            sweets: data.sweets,
            richbody: data.richbody,
            flavor: data.flavor,
            about: data.about,
            yen: data.yen,
            img: "beans.jpg",
            url: data.url,
            score: 0
        })
        res.send("コーヒー豆追加完了");
    } catch (err) {
        console.error(err);
        res.status(500);
    };
})

//　コーヒー豆を削除する 
app.delete("/delbeans/:id", async (req, res) => {
    const delId = req.params.id;
    try {
        await knex("beans").where({ id: delId }).del();
        res.send("削除完了")
    } catch (err) {
        console.error(err);
        res.status(500);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
