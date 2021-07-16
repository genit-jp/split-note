# メディア系のツールのDocker

※随時追加

## ビルド
```
docker-compose build
```

## 起動
```
docker-compose up -d
docker-compose exec media-tools bash
```

## コンテナ全削除
```
docker rm -f $(docker ps -aq)
```
