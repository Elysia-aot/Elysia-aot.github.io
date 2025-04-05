var posts=["2025/02/20/hello-world/","2025/02/21/“搭建部署自己的hexo博客”/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };