# Install

```
www
 |- client 客户端
 |- server 服务端
```

```sh
cd /path/to/server
npm install

vim config.js # 配置客户端相对路径

cp data.xlsx /path/to/server # 更新数据
node index.js # 生成 JSON 文件到 client/data 文件夹下
```
