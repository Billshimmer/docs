# Git工作流

## 基本概念

> git是当前最流行的代码管理工具，作为分布式的开源版本管理系统。

## 本地 && 远端

> 由于git是分布式的,客户端和服务端可以同步所有的备份和代码。
> 作为一个文件管理系统，例如文件状态管理和分支管理都是本地客户端的操作(everything-is-local);
> 在pull push fetch等等命令的协同下，我们可以使本地和远端的代码得到同步。
## 文件状态和状态转移
> ![avater](https://git-scm.com/book/en/v2/images/lifecycle.png
)

#### 查看当前文件状态
```
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working directory clean
```
#### 添加了一个未被跟踪的新文件
```
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    README

nothing added to commit but untracked files present (use "git add" to track)
```
#### 添加跟踪

```
$ git add README
```
```
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
```
#### 文件改动被提交到staged区
```
$ git commit -m "Story 182: Fix benchmarks for speed"
[master 463dc4f] Story 182: Fix benchmarks for speed
 2 files changed, 2 insertions(+)
 create mode 100644 README
```

## 分支管理和操作

> git的分支功能是核心功能，大型项目多人协同开发的场景下，就需要依赖分支管理来实现并行开发和功能管理。

#### 查看分支
```
$ git branch
  iss53
* master
  testing

```
#### 新开分支
```
$ git checkout -b serverfix origin/serverfix
Branch serverfix set up to track remote branch serverfix from origin.
Switched to a new branch 'serverfix'
```
#### 合并分支
```
$ git checkout master
$ git merge mergedBranch
Updating f42c576..3a0874c
Fast-forward
 index.html | 2 ++
 1 file changed, 2 insertions(+)
```
#### 删除分支
```
$ git branch -d testing
error: The branch 'testing' is not fully merged.
If you are sure you want to delete it, run 'git branch -D testing'.
```

## 命名规范

> git开发的命名主要针对commit、branch,常见例子:

```
当前改动添加并注释到staged区:$ git add . && git commit -m '添加文案显示和logo样式'
```

```
本地切换分支:$ git checkout -b feature/bjh-0410-0417-审核流程优化
```


## 后悔药

```
删除当前仓库内未受版本管理的文件：$ git clean -f
恢复仓库到上一次的提交状态：$ git reset --hard
回退所有内容到上一个版本：$ git reset HEAD^
回退 a.js 这个文件的版本到上一个版本：$ git reset HEAD^ a.js
回退到某个版本：$ git reset 057d
将本地的状态回退到和远程的一样：$ git reset –hard origin/master
向前回退到第3个版本：$ git reset –soft HEAD~3
```


## 警报

> gitlab平台的merge request操作有可能会出现冲突，建议在本地解决，代码冲突双方都必须仔细阅读冲突代码，切勿个人解决合并。

> 如果你不慎在develop或者master分支上修改了代码，可以使用git stash将改动缓存起来,切换到功能分支后通过git stash pop命令获取到之前的改动

```
$ git status
  On branch master
  Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

       modified:   index.html

  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)

       modified:   lib/simplegit.rb
```
```
$ git stash
  Saved working directory and index state \
   "WIP on master: 049d078 added the index file"
  HEAD is now at 049d078 added the index file
  (To restore them type "git stash apply")
```
```
$ git checkout feature
$ git stash pop
# ... continue hacking ...
```