<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            screenWidth: document.body.clientWidth
        }
    },
    mounted() {
        let _this = this;
        window.onload = function() {
            _this.screenWidth = document.body.clientWidth;
        }
        window.onresize = function() {
            _this.screenWidth = document.body.clientWidth;
        };
    },
    watch: {
        "screenWidth": function(val) {
            document.body.style.transform = 'scale(' + val / 1920 + ')';
            document.body.style['-o-transform'] = 'scale(' + val / 1920 + ')';
            document.body.style['-webkit-transform'] = 'scale(' + val / 1920 + ')';
            document.body.style['-moz-transform'] = 'scale(' + val / 1920 + ')';
        }
    }
}
</script>

<style>
body {
    margin: 0;
    transform-origin: 0 0;
    background-image: url(./assets/background2.png);
    background-size: cover;
}
</style>
