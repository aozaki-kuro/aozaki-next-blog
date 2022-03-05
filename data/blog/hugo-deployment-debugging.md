---
title: 'Hugo部署与踩坑记'
date: 2020-08-09
draft: false
summary: 坑，特别多的坑。
tags:
  - 折腾
  - 网络
---

本博客部署于 Github Pages 上，最初构建时应用的 Hexo。在被 Node.js 的巨量依赖和最终页面生成速度面前决定迁移至 Hugo。Hugo 部署的坑很多，故保留完整操作与相关踩坑记录。😫

## WSL2 的部署

在反复折腾几轮后遂决定 ~~滚回 Hexo 方案~~ 在 WSL 下 Hexo 的生成速度面前我又滚回来了。

以下为操作笔记：

### Windows 10 内启用相关功能

首先确保 Windows 10 版本在 18917 以上，Store 内安装 Ubuntu 后开始 WSL2 的配置。[^1]

以管理员权限运行 Powershell，并启用虚拟机平台可选组件

```Powershell
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
```

启用 Linux 子系统功能

```Powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

**重启后**打开安装的 Ubuntu 子系统，输入用户名密码，完成 WSL1 的安装；此时在 Powershell 内输入`wsl -l`可查看安装的版本号（我所安装的是 Ubuntu 18.04 LTS，则显示`Ubuntu-18.04`）。

### 转换为 WSL2

首先至 Microsoft 下载[Linux Kernel](https://docs.microsoft.com/zh-cn/windows/wsl/wsl2-kernel)，安装后方可进行转换。

根据`wsl -l`获得的版本号，将其转换为 WSL2。

```Powershell
wsl --set-version Ubuntu-18.04 2
```

之后可以输入`wsl --set-default-version 2`，使之后安装的 Linux 子系统都安装到 WSL2 中。

至此 WSL2 的部署完成。

---

## Hugo

### WSL2 内部署 Hugo

对于老手应该问题不大，我还是记录一下新手的操作防止自己忘记……

```sh
cd /tmp
wget https://github.com/gohugoio/hugo/releases/download/v0.74.3/hugo_extended_0.74.3_Linux-64bit.tar.gz
tar xvf hugo_extended_0.74.3_Linux-64bit.tar.gz
sudo mv hugo /usr/local/bin
hugo
```

此处要注意，虽然 WSL2 是 64 位的，但好像只能运行 32 位的程序（未确证）。

### Hugo 相关操作

#### 创建博客与添加新文章

如下命令创建博客

```sh
hugo new site blog #这里填入自己的博客根目录名称
cd blog
```

新增主题（这里应用的是 MemE）[^2]

```sh
git init
git submodule add --depth 1 https://github.com/reuixiy/hugo-theme-meme.git themes/meme
rm config.toml && cp themes/meme/config-examples/zh-cn/config.toml config.toml #将config.toml替换为主题用
```

新建文章与关于页面

```sh
hugo new "tech/hello-world.md"
hugo new "about/_index.md"
```

运行本地渲染，进行预览

```sh
hugo server -D
```

#### 连接至 SSH

```sh
ssh-keygen -tecdsa #创建sshkey，可以看到一个谜之ASCII图片
cat ~/.ssh/id_ecdsa.pub #查看公钥，复制后添加至Github
```

#### 推送更新

```sh
git remote set-url origin git@github.com:xxxxxxx #此处修改为自己项目主页的ssh地址
```

在添加过 origin 后如下操作：

```sh
hugo --gc --minify #这里在博客根目录下执行
cd public
git add .
git status
git commit -m "Update" #根据需要填写更新名称
git push
```

如果博客出现渲染问题，可以改用`hugo --gc -e production --cleanDestinationDir`进行重构。

## 部署 Cloudflare CDN

由于国内 CDN 均要求备案，粗略看了看备案的冗长过程并想到要在博客底下挂一个~~又长又丑的~~备案号，加之 DNSpod 的解析服务突然出错（DNSpod 你自己说你是第几次了），便下定决心迁移至 Cloudflare 的~~降速~~CDN 上。

### 为何选择 Cloudflare？

原因很简单，Cloudflare 的 CDN 遍布全世界，并且提供号称全球最快的 DNS `1.1.1.1`、免费的 SSL 证书，以及号称几乎打不死的 DDoS 保护，而且最重要的是不需要备案 🤣 近期还听说 Cloudflare 在内地与百度有合作，部署了大量节点，想必访问速度应该是差不到哪里去……吧。

配置过程不详述了，我主要参考的是[Mogeko 的 Cloudflare CDN 添加教程](https://mogeko.me/2019/056/)。

部署后的踩坑记录更新在后面。

---

## 踩坑记

### CSS 错误的排查

最开始听说 Hugo 轻量化且不需要那么多依赖，于是便想着往 Hugo 迁移。当然折腾上手后才发现踩坑的点太多了。

首先部署在 Windows 10 下，未使用 WSL 时，遇到了本地`hugo server -D`预览正常，`git push`后页面出错的问题。排查几次后发现报错如下：

```
Failed to find a valid digest in the 'integrity' attribute for resource 'xxxxxxx.css' with computed SHA-256 integrity. The resource has been blocked.
```

查了多方资料后发现有怀疑 CRLF/LF 的问题，也有说可以把`integrity`属性删除即正常的。但是根据相关指引执行后均没有效果。

此外，老马在 Manjaro 下生成的网页`git push`后是正常的，可以正常加载 CSS，Windows 下无论通过`Powershell`还是`Git bash`窗口执行都不正常。问题排查困难重重，暂时断了迁移至 Hugo 的念想。

一直到昨天，尝试性地部署了`WSL2`，最终编译才通过，让 CSS 能够正常加载。

### 大小写的识别

昨天在成功通过 Hugo 部署后发现了问题：首页可以加载文章，但点进 Read More 后 404。

进行多次排查后发现是文章所在文件夹的大小写问题，这一问题在 Hexo 下未发生，将所有文件改为小写后加载正常。

### 部署操作麻烦

除了难以排查的 CSS 问题和大小写识别的坑，由于我的 coding 基础薄弱，Hugo 部署时的命令行数量也让我头疼。不仅难记且涉及根目录及`public/`两个目录层级。而 Hexo 则只需要优雅地输入`hexo g && hexo d`即可完成在服务端的部署。

### Cloudflare CDN 部署时的注意事项

由前面的踩坑经验可知，Hugo 生成的 CSS 需要检查完整性，所以尽管 Cloudflare 提供了 Auto Minify 功能，但是请千万不要去勾选 HTML 以外的选项。Auto Minify 会导致出现前述的 CSS 完整性错误，进而使得网页无法加载 CSS 样式。

---

## 总结

Hugo 尽管只需要下载一个二进制文件即可开始部署和使用，但是在这过程中碰到的坑和解决问题的难度远超 Hexo。如果我想不起来用 WSL，那可能就完全和 Hugo 无缘。

这方面不得不说 Hexo 的功能性强得多，编译时自动转换 CRLF/LF，并且不受到大小写的影响。除了在 WSL 下生成网页时真的很慢……

看在 Hugo 有 MemE 这个颜值高、简洁还不容易撞车的主题面上饶了你了。

另外题图来自赤井はあと，回顾整个排查过程确实非常生草 ~~以及哭笑不得~~ 。

---

当然尽管折腾了那么多，建立博客的初衷还是写点东西下来你说是不是。

好好写点东西下来吧………………🤯

[^1]: 具体请参照《适用于 Linux 的 Windows 子系统安装指南》：https://docs.microsoft.com/zh-cn/windows/wsl/install-win10
[^2]: 更多操作及详情，请查看 MemE 项目主页：https://github.com/reuixiy/hugo-theme-meme/blob/master/README.zh-cn.md
