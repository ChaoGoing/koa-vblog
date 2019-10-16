export default [
    {
      path: "/manage",
      name: "主页",
      icon: "icon-dynamic_fill",
      level: 1,
      sort: 1,
      children: [],
      fixed: false
    },
    {
      path: "/",
      name: "管理博客",
      icon: "icon-createtask_fill",
      level: 0,
      fixed: false,
      children: [
        {
          path: "/manageArticles",
          name: "文章管理",
          icon: "icon-dynamic_fill",
          level: 1,
          children: [],
          fixed: false
        },
        {
          path: "/manageLabels",
          name: "标签管理",
          level: 1,
          children: [],
          fixed: false
        },

      ]
    },
    {
        path: "/authorInfo",
        name: "个人信息",
        icon: "icon-dynamic_fill",
        level: 1,
        children: [],
        sort: 1,
        fixed: false
    }
    
  ]