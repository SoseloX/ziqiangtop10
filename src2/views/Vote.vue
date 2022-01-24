<template>
    <div id='contanier'>
        <div class="screen">
            <div id="dc99be"></div>
            <img id="b41532" src="../assets/ziqianglogo.png" />
            <router-link to="./intro">
                <div id="ed0000">活动介绍</div>
            </router-link>
            <router-link to="./vote">
                <div id="f016bd">投票</div>
            </router-link>
            <router-link to="./review">
                <div id="e2884e">十大回顾</div>
            </router-link>
            <div id="b69ef6"></div>
            <div id="c9e258">Copyright@ziqiang.studio 2017<br>自强Studio小强车间 荣誉出品</div>
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
#dc99be { position: absolute; left: 0px; top: 0px; width: 1920px; height: 96px; opacity: 100%; background-color: #863232FF; border: 1pt solid #707070FF; }
#b41532 { position: absolute; left: 60px; top: 16px; width: 183px; height: 58px; opacity: 100%; }
#ed0000 { position: absolute; left: 624px; top: 21px; width: 176px; height: 62px; opacity: 100%; font-family: Segoe UI; font-weight: normal; align: left; color: #F9F9F9FF; font-size: 44px; letter-spacing: 0px; line-height: 53px; }
#f016bd { position: absolute; left: 912px; top: 21px; width: 88px; height: 62px; opacity: 100%; font-family: Segoe UI; font-weight: bold; align: left; color: #F9F9F9FF; font-size: 44px; letter-spacing: 0px; line-height: 53px; }
#e2884e { position: absolute; left: 1104px; top: 21px; width: 176px; height: 62px; opacity: 100%; font-family: Segoe UI; font-weight: normal; align: left; color: #F9F9F9FF; font-size: 44px; letter-spacing: 0px; line-height: 53px; }
#b69ef6 { position: absolute; left: 0px; top: 2064px; width: 1920px; height: 96px; opacity: 100%; background-color: #863232FF; border: 1px solid #707070FF; }
#c9e258 { position: absolute; left: 830px; top: 2082px; width: auto; height: auto; opacity: 100%; font-family: Segoe UI; font-weight: normal; align: left; color: #F9F9F9FF; font-size: 28px; letter-spacing: 0px; line-height: 34px; }
</style>