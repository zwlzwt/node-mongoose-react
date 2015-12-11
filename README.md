## 建筑讯息类网站练习

###  涉及知识点：
1. MVC分离

2. 部署Webpack打包工具
3. node.js
  * npm工具使用
  * express
  * 模块引用（CommonJs）
4. mongodb数据库：
  * 基于mongoose(删，存，改，查..方法的尝试)

5. jQuery和mixitup应用

6. react试验性使用和ejs模版引擎的使用

### 实现功能：
1. ##### 页面实现
  * 网站首页
  * 列表页
  * 单个页面的实现
  * 导航栏

2. ##### 实现响应式布局  （使用媒体查询功能）
  * 主页导航栏
  * 登录注册框
  * 列表页
  * 单个页面对话框等

3. ##### 登录注册功能
  * 保持登录状态
  * 注册相同用户名驳回
  * 密码加盐加密功能

4. ##### 点赞功能
  * 后台记录点赞次数
  * 点赞排序
  * 随机排序和时间排序功能

5. ##### 评论功能
  * 评论主题
  * 叠楼评论楼主

6. ##### 页面锚点定位和反回顶部动画

### 还未实现功能：
1. 登录注册验证

2.  找回密码

3. 用户权限和用户页面状态

4. 用户点赞的文章列表

5. 分类等

6. 文件长传（图片等）

### 尝试：

* react组件编写（遇到关于jquery不能使用等问题）
* fetch方法（还没有尝试代替ajax）
* 跨域的调用（还未尝试）

### 问题：
* 对于header-status的返回错误页面问题
* webpack 的url loader的img调用问题（模版引擎内调用图片问题）
* react的jquery不能使用（关于登录验证实现的问题）