<template>
    <div id='sub_contanier'>
        <img src="../assets/big_cloud.png" id='about_big_cloud_left' class='about_big_cloud' alt="">
        <img src="../assets/big_cloud.png" id='about_big_cloud_right' class='about_big_cloud' alt="">
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
                    <div class="info_text" id='info_text1'>查看</div>
                </div>
            </div>
            <div id="median2" class="sub_median">
                <div id='square2' class="square">
                    <div id='square_text2' class="square_text">02</div>
                </div>
                <div class="square_below_text" id='square_below_text2'>初选阶段</div>
                <div class="info_box" id='info_box2'>
                    <div class="info_text" id='info_text2'>查看</div>
                </div>
            </div>
            <div id="median3" class="sub_median">
                <div id='square3' class="square">
                    <div id='square_text3' class="square_text">03</div>
                </div>
                <div class="square_below_text" id='square_below_text3'>终选阶段</div>
                <div class="info_box" id='info_box3'>
                    <div class="info_text" id='info_text4'>查看</div>
                </div>
            </div>
            <div id="median4" class="sub_median">
                <div id='square4' class="square">
                    <div id='square_text4' class="square_text">04</div>
                </div>
                <div class="square_below_text" id='square_below_text4'>结果公示</div>
                <div class="info_box" id='info_box4'>
                    <div class="info_text" id='info_text4'>查看</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'About'
}
</script>

<style>
#sub_contanier{
    position: static;
    height: 100%;
    width: 100%;
    background:url("../assets/half_background.png") no-repeat center center;
    background-attachment: fixed;
    background-size:cover;
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
    font-size: 2.3rem;
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
}
.info_text{
    height: 100%;
    font-size: 1.75rem;
    font-family: FangSong;
    font-weight: 400;
    color: #000000;
    opacity: 1;
}
#square1{
    /* position: absolute; */
    /* top:46.85%;
    left:18.20%; */
    position: relative;
}
#square_below_text1{
    /* position: absolute; */
    /* left: 12.39%;
    top:58.27%; */
}
#info_box1{
    /* left:12.81%;
    top:65.37%; */
    /* position: absolute; */
}
#square2{
    /* position: absolute; */
    /* top:46.85%;
    left:36.82%; */
}
#square_below_text2{
    /* position: absolute; */
    /* left: 35.31%;
    top:58.27%; */
}
#info_box2{
    /* left:32.35%;
    top:65.37%; */
    /* position: absolute; */
}
#square3{
    /* position: absolute; */
    /* top:46.85%;
    left:56.25%; */
}
#square_below_text3{
    /* position: absolute; */
    /* left: 54.69%;
    top:58.27%; */
}
#info_box3{
    /* left:51.56%;
    top:65.37%; */
    /* position: absolute; */
}
#square4{
    /* position: absolute; */
    top:46.85%;
    left:75.57%;
}
#square_below_text4{
    /* position: absolute; */
    left: 75.57%;
    top:58.27%;
}
#info_box4{
    left:70.88%;
    top:65.37%;
    /* position: absolute; */
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
    left: 572px;
    position: absolute;
}
#ver_line2{
    top: 436px;
    left: 958px;
    position: absolute;
}
#ver_line3{
    top: 436px;
    left: 1367px;
    position: absolute;
}
.about_big_cloud{
    width: 254px;
    height: 141px;
    background: rgba(0, 0, 0, 0);
    opacity: 1;
}
#about_big_cloud_left{
    transform: rotateY(180deg);
    position: absolute;
    left: 485px;
    top: 173px;
}
#about_big_cloud_right{
    position: absolute;
    left: 1160px;
    top: 173px;
}
</style>
