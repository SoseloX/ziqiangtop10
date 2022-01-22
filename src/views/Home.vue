<template>
    <div id="contanier">
        <div id='year'>2021</div>
        <img src="../assets/home_text.png" alt="" id='home_text'>
       
        <img src="../assets/big_cloud.png" alt="" class="big_cloud" id='left_big'>
        <img src="../assets/big_cloud.png" alt="" class="big_cloud" id='right_big'>
        <div id='four'>东滨有山|山上有黉|风云变幻|学子无双 <br>乾坤转动|大潮滂滂|斗转星移|群英堂堂</div>
        <router-link id='vote' to='/vote'>
            <div id='vote-text'>
                参与投票
            </div>
        </router-link>
        <router-link id='review' to='/review'>
            <div id='review-text'>
                十大回顾
            </div>
        </router-link>
        <img src="../assets/small_cloud.png" alt="" class="small_cloud" id='left_small'>
        <img src="../assets/small_cloud.png" alt="" class="small_cloud" id='right_small'>
        <div id='identity'>
            Copyright@ziqiang.studio 2017
        </div>
    </div>
</template>

<script>
export default{
    name:'Home'
}

</script>

<style>
  body{
    margin: 0px;
    padding: 0;
    height: 100%;
    position: relative;
    overflow: hidden;
    opacity: 1;
  }
  #contanier{
      position: static;
    height: 100%;
    width: 100%;
    background:url("../assets/blur_background.png") no-repeat center center;
    background-attachment: fixed;
    background-size:cover;
  }
  #home_text{
    position: absolute;
    display: block;
    width: 43.28%;
    height: 25.5%;
    background: rgba(0, 0, 0, 0);
    opacity: 1;
    left: 28.135%;
    top: 10%;
  }
  #whu{
    position: absolute;
    width: 95%;
    height: 56.4%;
    background: rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 6px rgba(0, 0, 0, 0.16);
    opacity: 0.27;
    left: 2.5%;
    top: -5%
  }
  .big_cloud{
    width: 13.22%;
    height: 13.05%;
    background: rgba(0, 0, 0, 0);
    opacity: 1;
  }
  #right_big{
      position: absolute;
      top: 16%;
      right: 15.78%;
  }
  #left_big{
      position: absolute;
      transform: rotateY(180deg);
      top: 16%;
      left: 16.78%;
  }
  #year{
    position: absolute;
    width: 26.5%;
    height: 3.7%;
    font-size: 2vw;
    font-family: Yu Gothic;
    font-weight: 300;
    line-height: 51px;
    color: #000000;
    letter-spacing: 120px;
    opacity: 1;
    left: 37.82%;
    top: 7.22%;
    text-align: center;
  }
  #four{
    position: relative;
    width: 26%;
    height: 9.16%;
    font-size: 1.3vw;
    font-family: FangSong;
    font-weight: 400;
    line-height: 5vh;
    color: #FFFFFF;
    text-shadow: 0px 3px 6px rgba(255, 255, 255, 0.52);
    letter-spacing: 0.2rem;
    opacity: 0.8;
    margin: 0 auto;
    top:60.74%;
  }
  #vote{
    position: relative;
    width: 24.7%;
    height: 6.65%;
    background: #F3F3F3;
    border: 3px solid #000000;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    opacity: 1;
    margin: 0 auto;
    top: 63%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #vote-text{
    position: absolute;
    margin: 0 auto;
    width: 50%;
    height: 80%;
    font-size: 2vw;
    font-family: FangSong;
    font-weight: 400;
    line-height: 56px;
    color: #000000;
    opacity: 1;
    text-align: center;
  }
  #review{
    position: relative;
    width: 24.7%;
    height: 6.65%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    opacity: 1;
    /* left: 40%; */
    margin: 0 auto;
    top: 64%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #review-text{
    position: absolute;
    margin: 0 auto;
    width: 50%;
    height: 80%;
    font-size: 2vw;
    font-family: FangSong;
    font-weight: 400;
    line-height: 56px;
    color: #FFFFFF;
    opacity: 1;
    text-align: center;
  }
  .small_cloud{
      position: absolute;
      width: 8.435%;
      height: 5.755%;
  }
  #left_small{
      top: 73%;
      left: 29.93%
  }
  #right_small{
      top: 73%;
      right: 29.93%;
      transform: rotateY(180deg);
  }
  #identity{
      position: absolute;
    width: 14.75%;
    height: 4.26%;
    font-family: Segoe UI;
    font-weight: 400;
    line-height: 25px;
    color: #F9F9F9;
    opacity: 1;
    right: 1%;
    bottom: 2%;
  }
</style>