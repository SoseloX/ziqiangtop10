<template>
    <div class="name-box-bg">{{name}}</div>
</template>

<script>
export default {
    name: "name_box",
    props: ["name"]
}
</script>

<style>
.name-box-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(230, 230, 230, .7);
    border: 2px solid white;
    box-shadow: inset 0px 0px 5px 1px #AAA, 1px 1px 5px 1px #AAA;
    font-size: 28px;
    padding: 15px;
    margin: 15px;
}
</style>