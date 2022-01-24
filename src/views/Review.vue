<template>
    <div id='contanier'>
        <router-link id='back_button' to="./index">
            <img src="../assets/back.png" id="back">
        </router-link>
        <div class="review_head">
            <img src="../assets/big_cloud.png" id="review_big_cloud_left" class="big_cloud">
            <img src="../assets/review_text.png" id="review_text">
            <img src="../assets/big_cloud.png" id="review_big_cloud_right" class="big_cloud">
        </div>
        <div id="review_wrapper" ref="scroll" >
            <div id="review_content">
                <div id="review_year_1">
                    <div id="name-line"></div>
                    <div id="name-year"><div id="name-year-div"><span id="name-year-span">2018</span></div></div>
                    <div class="name-table">
                        <name_box name="姓名1"></name_box>
                        <name_box name="姓名2"></name_box>
                        <name_box name="姓名3"></name_box>
                        <name_box name="姓名4"></name_box>
                        <name_box name="姓名5"></name_box>
                        <name_box name="姓名6"></name_box>
                        <name_box name="姓名7"></name_box>
                        <name_box name="姓名8"></name_box>
                        <name_box name="姓名9"></name_box>
                        <name_box name="姓名A"></name_box>
                    </div>
                </div>
                <div id="review_year_2">
                    <div id="name-line"></div>
                    <div id="name-year"><div id="name-year-div"><span id="name-year-span">2019</span></div></div>
                    <div class="name-table">
                        <name_box name="姓名1"></name_box>
                        <name_box name="姓名2"></name_box>
                        <name_box name="姓名3"></name_box>
                        <name_box name="姓名4"></name_box>
                        <name_box name="姓名5"></name_box>
                        <name_box name="姓名6"></name_box>
                        <name_box name="姓名7"></name_box>
                        <name_box name="姓名8"></name_box>
                        <name_box name="姓名9"></name_box>
                        <name_box name="姓名A"></name_box>
                    </div>
                </div>
                <div id="review_year_3">
                    <div id="name-line"></div>
                    <div id="name-year"><div id="name-year-div"><span id="name-year-span">2020</span></div></div>
                    <div class="name-table">
                        <name_box name="姓名1"></name_box>
                        <name_box name="姓名2"></name_box>
                        <name_box name="姓名3"></name_box>
                        <name_box name="姓名4"></name_box>
                        <name_box name="姓名5"></name_box>
                        <name_box name="姓名6"></name_box>
                        <name_box name="姓名7"></name_box>
                        <name_box name="姓名8"></name_box>
                        <name_box name="姓名9"></name_box>
                        <name_box name="姓名A"></name_box>
                    </div>
                </div>
                <div id="review_year_4">
                    <div id="name-line"></div>
                    <div id="name-year"><div id="name-year-div"><span id="name-year-span">2021</span></div></div>
                    <div class="name-table">
                        <name_box name="姓名1"></name_box>
                        <name_box name="姓名2"></name_box>
                        <name_box name="姓名3"></name_box>
                        <name_box name="姓名4"></name_box>
                        <name_box name="姓名5"></name_box>
                        <name_box name="姓名6"></name_box>
                        <name_box name="姓名7"></name_box>
                        <name_box name="姓名8"></name_box>
                        <name_box name="姓名9"></name_box>
                        <name_box name="姓名A"></name_box>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
import name_box from '../components/name_box'
BScroll.use(MouseWheel)

export default {
    name: "Review",
    mounted() {
        this.init()
    },
    methods: {
        init(){
            this.bs = new BScroll(this.$refs.scroll, {
                probeType: 4,
                scrollY: true,
                click: true,
                mouseWheel: true
            })
        }
    },
    components: {
        name_box
    }
}
</script>

<style>
#review_text {
    position: absolute;
    width: 43%;
    height: 25%;
    left: 28%;
    top: 8%;
}
.big_cloud {
    position: absolute;
    top: 14%;
}
#review_big_cloud_left {
    left: 17%;
    transform: rotateY(180deg);
}
#review_big_cloud_right {
    left: 71%;
}
.name-table {
    position: absolute;
    left: 20%;
    display: grid;
    grid-column-gap: 5%;
    grid-row-gap: 15%;
    grid-template-columns: repeat(5, 10vw);
}
#review_wrapper{
    position: absolute;
    width: 80%;
    height: 30%;
    top: 40%;
    left: 15%;
    overflow: hidden;
}
#review_content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 440%;
}
#review_year_1, #review_year_2, #review_year_3, #review_year_4{
    display: flex;
    width: 100%;
    height: 45%;
    align-items: center;
    justify-content: space-between;
}
#name-year {
    position: relative;
    top: -35px;
    left: 20px;
    font-size: 48px;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: right;
    border: 2px solid black;
    border-radius: 8px;
    transform: rotate(45deg);
    background-color: white;
}
#name-year-div {
    transform: rotate(-45deg) translate(15px);
}
#name-year-span {
    background-color: white;
}
#name-line {
    position: absolute;
    left: 60px;
    width: 2px;
    height: 240px;
    background-color: black;
}
</style>