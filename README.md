# Choose your favorite coffee

![image](https://github.com/)



# About

このアプリは、苦味や甘味、酸味などの好みを指定すると、それに合わせたおすすめのコーヒー豆をレコメンドしてくれるアプリです。
管理画面では、コーヒー豆の編集も可能です。

# Development

利用には環境設定が必要です。

**データベース**

PostgresSQLにて、「beans」というデータベースを作成します。


**設定手順**

1.このリポジトリをクローン
2.依存関係をインストール
```bash
$ npm i
```
3.データベースの作成
```bash
$ npm run migrate
$ npm run seed
```
4.アプリを実行
```bash
$ npm run start
$ npm run start:api
```

# Technology used

<div>
<img src="https://img.shields.io/badge/-Git-F05032.svg?logo=git&style=plastic">
<img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic">
<img src="https://img.shields.io/badge/-Css3-1572B6.svg?logo=css3&style=plastic">
<img src="https://img.shields.io/badge/-Html5-E34F26.svg?logo=html5&style=plastic">
<img src="https://img.shields.io/badge/-Postgresql-336791.svg?logo=postgresql&style=plastic">
<img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=plastic">
<img src="https://img.shields.io/badge/-Node.js-339933.svg?logo=node.js&style=plastic">
<img src="https://img.shields.io/badge/-Nodemon-76D04B.svg?logo=nodemon&style=plastic">
Render
</div>

<br />

# Future features

- [ ] AWS EC2インスタンスへのデプロイ
- [ ] 管理画面のユーザー認証

