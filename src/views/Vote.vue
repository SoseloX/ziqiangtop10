<template>
    <div id='sub_contanier'>
        <router-link id='back_button' to="./about">
            <img src="../assets/back.png" alt="" id='back'>
        </router-link>
        <div class="vote_head">
            <img src="../assets/big_cloud.png" id='about_big_cloud_left' class='about_big_cloud' alt="">
            <img src="../assets/vote.png" id='rule' alt="">
            <img src="../assets/big_cloud.png" id='about_big_cloud_right' class='about_big_cloud' alt="">
        </div>
        <div class="vote_wrapper" ref="scroll" >
            <div id="vote_content">
                <div id="row1">
                    <div class="avatar" id='A1'>
                        <div class="student">同学甲</div>
                        
                    </div>
                    <div class="avatar" id='A2'>
                        <div class="student">同学甲</div>
                    </div>
                    <div class="avatar" id='A3'>
                        <div class="student">同学甲</div>
                    </div>
                    <div class="avatar" id='A4'>
                        <div class="student">同学甲</div>
                    </div>
                    <div class="avatar" id='A5'>
                        <div class="student">同学甲</div>
                    </div>
                </div>
                <div id="row2">
                    <div class="avatar" id='B1'>
                        <div class="student">同学乙</div>
                    </div>
                    <div class="avatar" id='B2'>
                        <div class="student">同学乙</div>
                    </div>
                    <div class="avatar" id='B3'>
                        <div class="student">同学乙</div>
                    </div>
                    <div class="avatar" id='B4'>
                        <div class="student">同学乙</div>
                    </div>
                    <div class="avatar" id='B5'>
                        <div class="student">同学乙</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(MouseWheel)
export default ({
    name: 'Vote',
    mounted() {
        this.init()
    },
    methods:{
        init(){
            this.bs = new BScroll(this.$refs.scroll, {
                probeType: 3,
                scrollY: true,
                click: true,
                mouseWheel: true
            })
        }
    }
})
</script>

<style>
.vote_head{
    width: 60%;
    height: 30%;
    position: absolute;
    left: 20%;
    top: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.vote_wrapper{
    position: relative;
    width: 80%;
    height: 27.39%;
    margin: auto;
    top: 40%;
    overflow: hidden;
}
#vote_content{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 220%;
}
#row1, #row2{
    display: flex;
    width: 100%;
    height: 45%;
    align-items: center;
    justify-content: space-between;
}
.avatar{
    width: 13%;
    height: 100%;
    background: rgba(194, 194, 194, 0.05);
    border: 2px solid #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.student{
    position: relative;
    height: 8%;
    width: 40%;
    font-size: 1.2vw;
    font-family: FangSong;
    font-weight: 400;
    color: #000000;
    left: 3%;
    top: 2%;
}
</style>
