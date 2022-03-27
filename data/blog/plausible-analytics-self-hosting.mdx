---
title: '自行部署 Plausible Analytics'
summary: '话是这么说，但反正没几个人看。写下来记录一下操作过程。'
date: 2021-12-23
draft: false
tags:
  - 网络
  - 折腾
  - 博客
---

## 前言

折腾自建 Analytics 的初衷，其实是为了摆脱 Google Analytics 那难以置信的体积，以及过度复杂的面板和分析。当我只需要查看站点访问、页面统计以及地区的时候，我为什么要植入那么巨大体积的 JS 脚本并且把数据都拱手送给 Google 呢。

但是自建的可选项也并不多。除了 matomo 以外，在 Github 上目前高星的两个项目是 [:(fab fa-github): Plausible Analytics](https://github.com/plausible/analytics) 以及 [:(fab fa-github): Umami](https://github.com/mikecao/umami) 。

最开始我选择的是后者，也就是 Umami 作为选项。主要看重它整体非常轻盈，项目为 Next.js 编写，对于服务器资源的占用也非常少。

但是随着使用时间变长，我发现了不少体验上的问题，也是让我最后选择倒向 Plausible Analytics 的原因。

|              | Plausible Analytics |         Umami          |
| :----------: | :-----------------: | :--------------------: |
|   资源占用   |      相对较高       |           低           |
| 追踪脚本大小 |       < 1 KB        |         < 1 KB         |
|   编写语言   |       Elixir        |        Next.js         |
| Docker 部署  |  是，默认 4 个容器  | 是，总共 1 或 2 个容器 |
| 页面流量统计 |      相对准确       | **部分框架下存在问题** |
|   夜间模式   |    有，自动切换     |      有，手动切换      |
|    多语言    |     否，仅英语      |      有，手动切换      |

## Umami 的优势与问题

Umami 的最大优势在于它是一个纯 JS 项目，数据可以利用已有的 MySQL 或 PostgreSQL 进行储存，本身占用非常低。相比 Plausible Analytics 默认 4 个容器而且会产生 Defunct 进程，它真的资源占用很少，Lightsail 的最低档机器也不需要多久就能让它跑起来。

但是它的体验同样也是有问题的。首先就是 UI 相当不智能，夜间模式不能随系统切换，语言也不是自动侦测切换的。对于站点会生成一个 uuid 用以识别，但是这给数据迁移造成了不小麻烦。

最让我头疼的是，与 VuePress 框架一起使用时，打开页面和滚动页面都会让 Umami 记录到大量重复的页面浏览。比如仅仅是打开站点首页这一个动作，Umami 会记录到 3 次页面浏览，而滚动过一个子标题时会再记录到 3 次，上下滚动会重复记录。

这不仅造成了大量毫无必要的读写，而且让整个页面浏览量极其虚高，最后让这些统计数据显得毫无意义。

## Plausible Analytics 的部署

相比 Umami 能够迅速完成部署，Plausible Analytics 的部署则显得极其冗长而复杂。由于一直没查到靠谱的中文资料，于是我自己来写一下笔记。

以下安装环境使用 Ubuntu 20.04 LTS 。

### 安装 Docker CE

> [:(fab fa-docker): Docker 官方教程](https://docs.docker.com/engine/install/ubuntu/)

1、安装依赖

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release
```

2、导入 Docker 官方 KEY

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

3、安装 Docker CE

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### 设置非 root 账号不需要 sudo 执行 Docker 命令

1、添加名为 docker 的用户组

```bash
sudo groupadd docker
```

2、将当前用户加入组 docker

```bash
sudo gpasswd -a ${USER} docker
```

3、重启 docker 服务

```bash
sudo systemctl restart docker
```

4、添加访问和执行权限

```bash
sudo chmod a+rw /var/run/docker.sock
```

### Plausible Analytics 部署流程

> [:(fa fa-book): Plausible Analytics 官方教程](https://plausible.io/docs/self-hosting)

1、拉取相关文件

```bash
git clone https://github.com/plausible/hosting plausible
cd plausible
```

2、产生密钥，这里记得保存好，填写 env 时需要

```bash
openssl rand -base64 64 | tr -d '\n' ; echo
```

3、接下来编辑 `plausible-conf.env` 也就时需要的变量

```yaml
# 基本配置
ADMIN_USER_EMAIL=admin@example.com # 管理员电邮
ADMIN_USER_NAME=admin # 管理员用户名
ADMIN_USER_PWD=password # 密码
BASE_URL=https://example.com # 这里填写项目网址
SECRET_KEY_BASE=aaaaaaaaaaaaa # 填写先前产生的密钥

# 关闭注册
DISABLE_REGISTRATION=true
```

4、确认 `docker-compose.yml` 存在，启动

```bash
docker-compose up -d
```

项目启动后会监听在 8000 端口上。随后建站，将 8000 端口反代出去。

页面中登录并添加站点，将代码片段加入页面，便大功告成。

### （可选）使用 GeoLite2 标识地区

到 Maxmind 上[注册免费账户](https://www.maxmind.com/en/geolite2/signup)并注册 API 以使用相关服务。

编辑 `geoip/geoip.conf` 并填入相关 API 密钥。

融合相关设置并启动服务。

```bash
docker-compose -f docker-compose.yml -f geoip/docker-compose.geoip.yml up
```

设置完后默认使用 `GeoLite2` 数据库，但是界面仍然会显示 DB-IP 。在 Github 上搜寻相关问题后发现，就算设置成功，这个消息也不会消失。作者也表示[这个信息确实不怎么“智能”](https://github.com/plausible/analytics/discussions/1473)。

---

## 已知问题

1. Plausible Analytics 在部署后会产生 Defunct 进程，在 SSH 连入时会显示，比较丑。
2. 资源占用相对较高。
3. 与 Google Search Console 结合的操作非常麻烦。
4. 官方开源的 Self-hosting 的 Docker 镜像大约半年更新一次，很多新功能需要等很久才会上。

## 总结

目前个人体验下来，Plausible Analytics 在各方面属于比较平衡的一个项目。功能基本齐全，脚本轻量化，同时没有浏览量的虚高，和各框架（ Hugo 、 VuePress 、 Next.js ）配合基本没有问题，确实可以作为 Google Analytics 的优秀替代。
