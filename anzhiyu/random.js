var posts=["2025/02/21/“搭建部署自己的hexo博客”/","2025/04/06/数组中双指针的应用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };