# 概要
Next.js開発用のdockerコンテナ

# 実行方法

### コンテナ起動

```bash
docker-compose up -d
```

### IPアドレスを知る

```bash
docker-machine ls
```

または `docker-machine ip` `docker-machine ip default`

### ブラウザでアクセスする

上記方法で得たIPアドレスのport3000にアクセス

# 終了方法

### コンテナ削除

コンテナとイメージを削除

```bash
docker-compose down --rmi all
```

ボリューム削除

```bash
docker volume rm nextjs-container_node_modules
```

# 開発する

### コンテナに入る

```bash
docker exec -it next bash
```

### ホストディレクトリからコンテナ内のコマンドを実行する

```bash
docker exec -it npm install hoge
```

