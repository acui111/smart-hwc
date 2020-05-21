import Project from '../pages/Project'

export default[
  //首页路由
  {
    path:'/project',
    component:Project,
  },
  //路由重定向
  {
    path:'/',
    redirect:'/project',
  }
]