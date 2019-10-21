export default [
    {
      path: "/index",
      name: "主页",
      icon: "ivu-icon-ios-home-outline",
      level: 1,
      sort: 1,
      children: [],
      fixed: false
    },
    {
      path: "/",
      name: "管理博客",
      icon: "ivu-icon-md-book",
      level: 0,
      fixed: false,
      children: [
        {
          path: "/manageArticles",
          name: "文章管理",
          icon: "ivu-icon-md-book",
          level: 1,
          children: [],
          fixed: false
        },
        {
          path: "/manageLabels",
          name: "标签管理",
          level: 1,
          icon:"ivu-icon-md-book",
          children: [],
          fixed: false
        },

      ]
    },
    {
        path: "/authorInfo",
        name: "个人信息",
        icon: "ivu-icon-ios-contact",
        level: 1,
        children: [],
        sort: 1,
        fixed: false
    }
    
  ]