import VueRouter from "vue-router"
// 引入组件
import Intro from '../views/Intro'
import Review from '../views/Review'
import Vote from '../views/Vote'

// 创建并暴露一个路由器
const router = new VueRouter({
   routes:[
       {
          path:'/',
          redirect:'/intro'
       },
       {
            path:'/intro',
            component:Intro
       },
       {
            path:'/review',
            component:Review
       },
       {
            path:'/vote',
            component:Vote
       }
   ]
})

export default router