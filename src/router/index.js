import VueRouter from "vue-router"
// 引入组件
import Home from '../views/Home'
import Vote from '../views/Vote'
import Review from '../views/Review'

// 创建并暴露一个路由器
const router = new VueRouter({
   routes:[
       {
           path:'/',
           redirect:'/index'
       },
       {
            path:'/index',
            component:Home
       },
       {
           path:'/vote',
           component:Vote
       },
       {
           path:'/review',
           component:Review
       }
   ]
})

export default router