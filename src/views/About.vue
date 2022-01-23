<template>
    <div id='sub_contanier'>
        <div id="mask" v-show="isMask" @click="dealAbout">
            <div id='prop' v-show="isMask" @click="dealAbout">
                <div id="prop_text" @click="dealAbout">
                    <h2>候选人推荐阶段</h2> 3月25日-5月8日
                    <br>
                    <br>
                    1.院（系）推荐。每个院（系）原则上推荐2名参选人（含团队）。
                    <br>
                    2.职能部门推荐。各职能部门原则上推荐2名参选人（含团队）。 
                    <br>
                    3.导师推荐。支持导师推荐所带优秀学生或团队参选。 
                    <br>
                    4.学生组织、学生社团推荐。各学生组织、学生社团可推荐1名参选人（含团队）参选。 
                    <br>
                    5.自荐。支持优秀学生和团队自荐报名。 
                    <br>
                    <br>
                    各单位要充分考察，推荐优秀个人（团队）参加武汉大学2020年度十大珞珈风云学子评选活动， 并按要求及时上报材料。候选人材料提交完毕后，评选委员会将对候选人材料进行初审，并确 定40位入围候选人（含团队）。
                </div>
            </div>
        </div>
        <router-link id='back_button' to="./index">
            <img src="../assets/back.png" alt="" id='back'>
        </router-link>
        <div class="about_head">
            <img src="../assets/big_cloud.png" id='about_big_cloud_left' class='about_big_cloud' alt="">
            <img src="../assets/rule.png" id='rule' alt="">
            <img src="../assets/big_cloud.png" id='about_big_cloud_right' class='about_big_cloud' alt="">
        </div>
        <div id='black_line'></div>
        <div class="dot" id='dot1'></div>
        <div class="dot" id='dot2'></div>
        <div class="dot" id='dot3'></div>
        <div class="dot" id='dot4'></div>
        <div class="dot" id='dot5'></div>
        <div class="dot" id='dot6'></div>
        <div class="dot" id='dot7'></div>
        <div class="data_text" id='data_text1'>3.25</div>
        <div class="data_text" id='data_text2'>5.8</div>
        <div class="data_text" id='data_text3'>5.9</div>
        <div class="data_text" id='data_text4'>5.18</div>
        <div class="data_text" id='data_text5'>5.19</div>
        <div class="data_text" id='data_text6'>5.28</div>
        <div class="data_text" id='data_text7'>5.31</div>
        <div class="ver_line" id='ver_line1'></div>
        <div class="ver_line" id='ver_line2'></div>
        <div class="ver_line" id='ver_line3'></div>
        <div class="median">
            <div id='median1' class="sub_median">
                <div id='square1' class="square">
                    <div id='square_text1' class="square_text">01</div>
                </div>
                <div class="square_below_text" id='square_below_text1'>候选人推荐阶段</div>
                <div class="info_box" id='info_box1'>
                    <div class="info_text" id='info_text1' @click="dealAbout">查看</div>
                </div>
            </div>
            <div id="median2" class="sub_median">
                <div id='square2' class="square">
                    <div id='square_text2' class="square_text">02</div>
                </div>
                <div class="square_below_text" id='square_below_text2'>初选阶段</div>
                <div class="info_box" id='info_box2'>
                    <div class="info_text" id='info_text2' @click="dealAbout">查看</div>
                </div>
            </div>
            <div id="median3" class="sub_median">
                <div id='square3' class="square">
                    <div id='square_text3' class="square_text">03</div>
                </div>
                <div class="square_below_text" id='square_below_text3'>终选阶段</div>
                <div class="info_box" id='info_box3'>
                    <div class="info_text" id='info_text4' @click="dealAbout">查看</div>
                </div>
            </div>
            <div id="median4" class="sub_median">
                <div id='square4' class="square">
                    <div id='square_text4' class="square_text">04</div>
                </div>
                <div class="square_below_text" id='square_below_text4'>结果公示</div>
                <div class="info_box" id='info_box4'>
                    <div class="info_text" id='info_text4' @click="dealAbout">查看</div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <img src="../assets/small_cloud.png" alt="" class="about_small_cloud" id='small_cloud_left'>
            <router-link id="about_vote_box" to="./vote">
                <div id="vote_text">
                    我已了解,开始投票
                </div>
            </router-link>
            <img src="../assets/small_cloud.png" alt="" class="about_small_cloud" id='small_cloud_right'>
        </div>
    </div>
</template>

<script>
export default{
    name:'About',
    data: function(){
        return {
            isMask: false
        }
    },
    methods:{
        dealAbout:function(){
            this.isMask = !this.isMask;
        }
    }
}
</script>

<style>
#back_button{
    position: absolute;
    left: 1%;
    top:1%;
    width: 113px;
    height: 60px;
}
#back{
    width: 90%;
    height: 100%;
}
#sub_contanier{
    position: static;
    height: 100%;
    width: 100%;
    background:url("../assets/half_background.png") no-repeat center center;
    background-attachment: fixed;
    background-size:cover;
}
.about_head{
    width: 60%;
    height: 30%;
    position: absolute;
    left: 20%;
    top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#rule{
    width: 434px;
    height: 253px;
    background: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
}
.about_big_cloud{
    width: 254px;
    height: 141px;
    background: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
}
#about_big_cloud_left{
    transform: rotateY(180deg);
}
#black_line{
    position: relative;
    width: 74.74%;
    height: 0px;
    border: 2px solid #000000;
    opacity: 1;
    background-color: black;
    top: 35.83%;
    left: 12.86%;
}
.dot{
    width: 15px;
    height: 15px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    opacity: 1;
}
#dot1{
    position: absolute;
    left: 12.86%;
    top: 35.18%;
}
#dot2{
    position: absolute;
    left: 26.20%;
    top: 35.18%;
}
#dot3{
    position: absolute;
    left: 33.38%;
    top: 35.18%;
}
#dot4{
    position: absolute;
    left: 43.44%;
    top: 35.18%;
}
#dot5{
    position: absolute;
    left: 55.05%;
    top: 35.18%;
}
#dot6{
    position: absolute;
    left: 66.35%;
    top: 35.18%;
}
#dot7{
    position: absolute;
    left: 87.34%;
    top: 35.18%;
}
.median{
    display: flex;
    position: relative;
    margin: 0 auto;
    width: 80%;
    height: 25%;
    top: 50%;
    align-items: center;
    justify-content: space-between;
    flex: auto;
}
.sub_median{
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.data_text{
    font-size: 37px;
    font-family: Arial;
    font-weight: 900;
    line-height: 52px;
    color: #000000;
    opacity: 1;
}
#data_text1{
    /* width: 86px; */
    height: 52px;
    font-size: 1.85rem;
    font-family: Arial;
    font-weight: 900;
    line-height: 52px;
    color: #000000;
    opacity: 1;
    left: 11.04%;
    top: 36.85%;
    position: absolute;
}
#data_text2{
    width: 62px;
    height: 104px;
    font-size: 37px;
    font-family: Arial;
    font-weight: 900;
    line-height: 52px;
    color: #000000;
    opacity: 1;
    left: 25%;
    position: absolute;
    top: 36.85%;
}
#data_text3{
    width: 62px;
    height: 156px;
    font-size: 37px;
    font-family: Arial;
    font-weight: 900;
    line-height: 52px;
    color: #000000;
    opacity: 1;
    left: 32.19%;
    position: absolute;
    top: 36.85%;
}
#data_text4{
    width: 86px;
    height: 104px;
    font-size: 37px;
    font-family: Arial;
    font-weight: 900;
    line-height: 52px;
    color: #000000;
    opacity: 1;
    left: 42.24%;
    position: absolute;
    top: 36.85%;
}
#data_text5{
    width: 86px;
    height: 104px;
    font-size: 37px;
    font-family: Arial;
    font-weight: 900;
    line-height: 52px;
    color: #000000;
    opacity: 1;
    left: 53.85%;
    position: absolute;
    top: 36.85%;
}
#data_text6{
    width: 86px;
    height: 104px;
    font-size: 37px;
    font-family: Arial;
    font-weight: 900;
    line-height: 52px;
    color: #000000;
    opacity: 1;
    left: 65.16%;
    position: absolute;
    top: 36.85%;
}
#data_text7{
    width: 86px;
    height: 104px;
    font-size: 37px;
    font-family: Arial;
    font-weight: 900;
    line-height: 52px;
    color: #000000;
    opacity: 1;
    left: 86.14%;
    position: absolute;
    top: 36.85%;
}
.square{
    width: 88.65px;
    height: 88.65px;
    border: 2px solid #707070;
    opacity: 1;
    border-radius: 12px;
    transform: rotate(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
}
.square_text{
    font-size: 63px;
    font-family: Symbol;
    font-weight: 400;
    line-height: 76px;
    color: #000000;
    opacity: 1;
    transform: rotate(-45deg);
}
.square_below_text{
    font-size: 2vw;
    font-family: FangSong;
    font-weight: 400;
    color: #000000;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    opacity: 1;
}
.info_box{
    width: 100%;
    height: 20%;
    background: rgba(42, 42, 42, 0.14);
    border: 2px solid #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer; 
}
.info_text{
    height: 100%;
    font-size: 1.75rem;
    font-family: FangSong;
    font-weight: 400;
    color: #000000;
    opacity: 1;
}
.ver_line{
    width: 0px;
    height: 54px;
    border: 2px solid #707070;
    opacity: 1;
    background: #707070;
}
#ver_line1{
    top: 436px;
    left: 28%;
    position: absolute;
}
#ver_line2{
    top: 436px;
    left: 50%;
    position: absolute;
}
#ver_line3{
    top: 436px;
    left: 72%;
    position: absolute;
}

.bottom{
    position: relative;
    width: 60%;
    height: 20%;
    display: flex;
    margin: 0 auto;
    top: 50%;
    justify-content: center;
    align-items: center;
}
.about_small_cloud{
    width: 25%;
    height: 50%;
}
#about_vote_box{
    width: 40%;
    height: 35%;
    background: rgba(255, 255, 255, 0.95);
    border: 3px solid #000000;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    align-items: center;
    text-align: center;
    text-decoration: none;
}
#vote_text{
    font-size: 2vw;
    font-family: FangSong;
    font-weight: 400;
    line-height: 61px;
    color: #000000;
    opacity: 1;
}
#small_cloud_right{
    transform: rotateY(180deg);
}

#mask{
 position: absolute;
 width: 100%;
 height: 100%;
 z-index: 10;
 background: rgba(240, 239, 239, 0.7);
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(15px);
}
#prop{
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
#prop_text{
    height: 80%;
    width: 90%;
    font-size: 30px;
    font-family: FangSong;
    font-weight: 400;
    line-height: 36px;
    color: #000000;
    opacity: 1;
}
</style>
