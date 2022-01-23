<template>
    <div id='sub_contanier'>
        <div id="info_mask" v-show="per1info" @click="handle_info(0)">
            <div id='info_prop' v-show="per1info" @click="handle_info(0)">
                <div id="info_prop_text" @click="handle_info(0)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
        <div id="info_mask" v-show="per2info" @click="handle_info(1)">
            <div id='info_prop' v-show="per2info" @click="handle_info(1)">
                <div id="info_prop_text" @click="handle_info(1)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
        <div id="info_mask" v-show="per3info" @click="handle_info(2)">
            <div id='info_prop' v-show="per3info" @click="handle_info(2)">
                <div id="info_prop_text" @click="handle_info(2)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
        <div id="info_mask" v-show="per4info" @click="handle_info(3)">
            <div id='info_prop' v-show="per4info" @click="handle_info(3)">
                <div id="info_prop_text" @click="handle_info(3)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
        <div id="info_mask" v-show="per5info" @click="handle_info(4)">
            <div id='info_prop' v-show="per5info" @click="handle_info(4)">
                <div id="info_prop_text" @click="handle_info(4)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
        <div id="info_mask" v-show="per6info" @click="handle_info(5)">
            <div id='info_prop' v-show="per6info" @click="handle_info(5)">
                <div id="info_prop_text" @click="handle_info(5)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
        <div id="info_mask" v-show="per7info" @click="handle_info(6)">
            <div id='info_prop' v-show="per7info" @click="handle_info(6)">
                <div id="info_prop_text" @click="handle_info(6)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
        <div id="info_mask" v-show="per8info" @click="handle_info(7)">
            <div id='info_prop' v-show="per8info" @click="handle_info(7)">
                <div id="info_prop_text" @click="handle_info(7)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
        <div id="info_mask" v-show="per9info" @click="handle_info(8)">
            <div id='info_prop' v-show="per9info" @click="handle_info(8)">
                <div id="info_prop_text" @click="handle_info(8)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
        <div id="info_mask" v-show="per10info" @click="handle_info(9)">
            <div id='info_prop' v-show="per10info" @click="handle_info(9)">
                <div id="info_prop_text" @click="handle_info(9)">
                    姓名:XX <br>
                    学院:XX <br>
                    年级:XX <br>
                    人物事迹
                </div>
            </div>
        </div>
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
                        <div class="vote_square" @click="handle_info(0)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button0' @click="handle_vote(0)">
                                    {{ choice[0] }}
                            </button>
                        </div>
                    </div>
                    <div class="avatar" id='A2'>
                        <div class="student">同学甲</div>
                        <div class="vote_square" @click="handle_info(1)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button1' @click="handle_vote(1)">
                                    {{ choice[1] }}
                            </button>
                        </div>
                    </div>
                    <div class="avatar" id='A3'>
                        <div class="student">同学甲</div>
                        <div class="vote_square" @click="handle_info(2)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button2' @click="handle_vote(2)">
                                    {{ choice[2] }}
                            </button>
                        </div>
                    </div>
                    <div class="avatar" id='A4'>
                        <div class="student">同学甲</div>
                        <div class="vote_square" @click="handle_info(3)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button3' @click="handle_vote(3)">
                                    {{ choice[3] }}
                            </button>
                        </div>
                    </div>
                    <div class="avatar" id='A5'>
                        <div class="student">同学甲</div>
                        <div class="vote_square" @click="handle_info(4)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button4' @click="handle_vote(4)">
                                    {{ choice[4] }}
                            </button>
                        </div>
                    </div>
                </div>
                <div id="row2">
                    <div class="avatar" id='B1'>
                        <div class="student">同学乙</div>
                        <div class="vote_square" @click="handle_info(5)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button5' @click="handle_vote(5)">
                                    {{ choice[5] }}
                            </button>
                        </div>
                    </div>
                    <div class="avatar" id='B2'>
                        <div class="student">同学乙</div>
                        <div class="vote_square" @click="handle_info(6)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button6' @click="handle_vote(6)">
                                    {{ choice[6] }}
                            </button>
                        </div>
                    </div>
                    <div class="avatar" id='B3'>
                        <div class="student">同学乙</div>
                        <div class="vote_square" @click="handle_info(7)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button7' @click="handle_vote(7)">
                                    {{ choice[7] }}
                            </button>
                        </div>
                    </div>
                    <div class="avatar" id='B4'>
                        <div class="student">同学乙</div>
                        <div class="vote_square" @click="handle_info(8)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button8' @click="handle_vote(8)">
                                    {{ choice[8] }}
                            </button>
                        </div>
                    </div>
                    <div class="avatar" id='B5'>
                        <div class="student">同学乙</div>
                        <div class="vote_square" @click="handle_info(9)">
                            <img src="../assets/eye.png" alt="" class="eye">
                        </div>
                        <img src="../assets/people.png" alt="" class="people">
                        <div class="vote_footer">
                            <button class="vote_button" id='vote_button9' @click="handle_vote(9)">
                                    {{ choice[9] }}
                            </button>
                        </div>
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
    data: function(){
        return{
            per1info: false,
            per2info: false,
            per3info: false,
            per4info: false,
            per5info: false,
            per6info: false,
            per7info: false,
            per8info: false,
            per9info: false,
            per10info: false,
            choice: ['投票', '投票', '投票', '投票', '投票',
                    '投票', '投票', '投票', '投票', '投票'],
        }
    },
    methods:{
        init(){
            this.bs = new BScroll(this.$refs.scroll, {
                probeType: 3,
                scrollY: true,
                click: true,
                mouseWheel: true
            })
        },
        handle_info:function(num){
            switch(num){
                case 0: this.per1info = !this.per1info; break;
                case 1: this.per2info = !this.per2info;break;
                case 2: this.per3info = !this.per3info;break;
                case 3: this.per4info = !this.per4info;break;
                case 4: this.per5info = !this.per5info;break;
                case 5: this.per6info = !this.per6info;break;
                case 6: this.per7info = !this.per7info;break;
                case 7: this.per8info = !this.per8info;break;
                case 8: this.per9info = !this.per9info;break;
                case 9: this.per10info = !this.per10info;break;
            }
            
        },
        handle_vote:function(num){
            if(this.choice[num] === '投票') {
                this.choice[num] = '已选中'
                let obj = document.querySelector('#vote_button'+num)
                console.log(this.choice[0])
                obj.style.width = '4.2vw'
                obj.textContent = '已选中'
            }
        }
    }
})
</script>

<style>
#info_mask{
 position: absolute;
 width: 100%;
 height: 100%;
 z-index: 10;
 background: rgba(240, 239, 239, 0.7);
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(15px);
}
#info_prop{
    width: 70%;
    height: 70%;
    background: rgba(255, 255, 255, 0.39);
    border: 1px solid #707070;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    opacity: 1;
    border-radius: 86px;
    position: absolute;
    z-index: 20;
    left: 15%;
    top: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#info_prop_text{
    height: 80%;
    width: 90%;
    font-size: 3vw;
    font-family: FangSong;
    font-weight: 400;
    line-height: 3.5vw;
    color: #000000;
    opacity: 1;
}
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
    width: 15%;
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
.vote_square{
    position: relative;
    width: 28px;
    height: 28px;
    border: 2px solid #707070;
    opacity: 1;
    border-radius: 20%;
    transform: rotate(45deg);
    left: 80%;
    top: -2%;
    cursor: pointer;
}
.eye{
    display: block;
    position: relative;
    width: 120%;
    height: 80%;
    transform: rotate(-45deg);
    left: -17%;
    top: 10%;
}
.people{
    width: 40%;
    height: 75%;
    position: relative;
    display: block;
    margin: auto;
    top: -10%;
}
.vote_footer{
position: relative;
    height: 20%;
    margin: 0 auto;
    bottom: 20%;
    display: flex;
    justify-content: center;
}
.vote_button{
    padding: 1px;
    height: 85%;
    width: 3.0vw;
    text-align: center;
    font-size: 1.3vw;
    font-family: FangSong;
    font-weight: 400;
    background: rgba(255, 255, 255, 0.39);
    border: 1px solid #707070;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 15px;
    cursor: pointer;
}
</style>
