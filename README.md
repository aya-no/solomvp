# Choose your favorite coffee

![image](https://github.com/aya-no/solomvp/blob/main/readmeimg/002.png)



# About

このアプリは、苦味や甘味、酸味などの好みを指定すると、それに合わせたおすすめのコーヒー豆をレコメンドします。
管理画面では、コーヒー豆の編集も可能です。

# Development

利用には環境設定が必要です。

**データベース**

PostgresSQLにて、「beans」というデータベースを作成します。


**設定手順**

1.このリポジトリをクローンし、依存関係をインストール
```bash
$ npm i
```
2.データベースの作成
```bash
$ npm run migrate
$ npm run seed
```
3.FirebaseのAuthoneticationを利用するため、アカウント登録
https://firebase.google.com/?hl=ja

4.プロバイダはメール/パスワードのみを有効

5.SDKを追加するため、ルートフォルダ直下に「.env.local」ファイルを作成し、取得した値を設定する（XXXを書き換える）
```bash
REACT_APP_FIREBASE_API_KEY="XXX"
REACT_APP_FIREBASE_AUTH_DOMAIN="XXX"
REACT_APP_FIREBASE_PROJECT_ID="XXX"
REACT_APP_FIREBASE_STORAGE_BUCKET="XXX"
REACT_APP_FIREBASE_MESSAGE_SENDER_ID="XXX"
REACT_APP_FIREBASE_APP_ID="XXX"
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

