# Choose your favorite coffee

![image](https://github.com/aya-no/solomvp/blob/main/readmeimg/002.png)



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

![image](https://github.com/aya-no/solomvp/blob/main/readmeimg/001.png)

<br />

# Future features

- [ ] AWS EC2インスタンスへのデプロイ
- [ ] コーヒー豆の追加・削除

