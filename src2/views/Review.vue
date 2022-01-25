<template>
    <div id='contanier'>
        <div class="screen">
            <div id="ef9e7b"></div>
            <img id="d73a26" src="../assets/ziqianglogo.png" />
            <router-link to="./intro">
                <div id="d4a1e2">活动介绍</div>
            </router-link>
            <router-link to="./vote">
                <div id="b605cc">投票</div>
            </router-link>
            <router-link to="./review">
                <div id="fbc86a">十大回顾</div>
            </router-link>
            <div id="candidate-table">
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
                <div class="candidate"></div>
            </div>
            <div id="fdb5e0"></div>
            <div id="a2abed">Copyright@ziqiang.studio 2017<br>自强Studio小强车间 荣誉出品</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Intro2"
}
</script>

<style>
.screen { position: absolute; left: 0px; top: 0px; width: 1920px; height: 2160px; overflow: hidden; }
#ef9e7b { position: absolute; left: 0px; top: 0px; width: 1920px; height: 96px; opacity: 1; background-color: #863232FF; border: 1pt solid #707070FF; }
#d73a26 { position: absolute; left: 60px; top: 16px; width: 183px; height: 58px; opacity: 1; }
#d4a1e2 { position: absolute; left: 624px; top: 21px; width: 176px; height: 62px; opacity: 1; font-family: Segoe UI; font-weight: normal; text-align: left; color: #F9F9F9FF; font-size: 44px; letter-spacing: 0px; line-height: 53px; }
#b605cc { position: absolute; left: 912px; top: 21px; width: 88px; height: 62px; opacity: 1; font-family: Segoe UI; font-weight: normal; text-align: left; color: #F9F9F9FF; font-size: 44px; letter-spacing: 0px; line-height: 53px; }
#fbc86a { position: absolute; left: 1104px; top: 21px; width: 176px; height: 62px; opacity: 1; font-family: Segoe UI; font-weight: bold; text-align: left; color: #F9F9F9FF; font-size: 44px; letter-spacing: 0px; line-height: 53px; }
#fdb5e0 { position: absolute; left: 0px; top: 2064px; width: 1920px; height: 96px; opacity: 1; background-color: #863232FF; border: 1px solid #707070FF; }
#a2abed { position: absolute; left: 830px; top: 2082px; width: auto; height: auto; opacity: 1; font-family: Segoe UI; font-weight: normal; text-align: left; color: #F9F9F9FF; font-size: 28px; letter-spacing: 0px; line-height: 34px; }
#candidate-table {
    position: absolute; left: 127px; top: 187px; width: 1920px; height: 1968px;
    display: grid;
    grid-template-columns: repeat(4, 272px);
    grid-column-gap: 167px;
    grid-template-rows: repeat(4, 388px);
    grid-row-gap: 70px;
}
.candidate {
    width: 272px;
    height: 388px;
    background: rgba(255, 255, 255, 0.39);
    border: 1px solid #707070;
}
</style>