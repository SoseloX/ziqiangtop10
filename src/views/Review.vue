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
        <div id="name-year">2018</div>
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
</template>

<script>
import name_box from '../components/name_box'

export default {
    name: "Review",
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
.name {
    position: absolute;
    width: 50%;
    height: 50%;
    top: 15%;
    left: 5%;
}
.name-table {
    display: grid;
    grid-template-columns: repeat(5, 27%);
    position: absolute;
    top: 50%;
    left: 29%;
}
</style>